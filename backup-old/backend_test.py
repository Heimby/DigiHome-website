#!/usr/bin/env python3
"""
Backend API Testing for DigiHome Application
Tests the FastAPI backend endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=')[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

def test_backend_apis():
    """Test all backend API endpoints"""
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not determine backend URL")
        return False
    
    api_base = f"{backend_url}/api"
    print(f"Testing backend at: {api_base}")
    
    # Test results
    results = {
        "root_endpoint": False,
        "create_status": False,
        "get_status": False
    }
    
    try:
        # Test 1: Root endpoint
        print("\n🔍 Testing GET /api/ (root endpoint)...")
        response = requests.get(f"{api_base}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
                results["root_endpoint"] = True
            else:
                print(f"❌ Root endpoint returned unexpected data: {data}")
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
    
    except Exception as e:
        print(f"❌ Root endpoint test failed: {e}")
    
    try:
        # Test 2: Create status check
        print("\n🔍 Testing POST /api/status (create status check)...")
        test_data = {
            "client_name": "DigiHome Test Client"
        }
        response = requests.post(f"{api_base}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and "client_name" in data and "timestamp" in data:
                print("✅ Create status check working correctly")
                print(f"   Created status with ID: {data['id']}")
                results["create_status"] = True
            else:
                print(f"❌ Create status returned incomplete data: {data}")
        else:
            print(f"❌ Create status failed with status {response.status_code}: {response.text}")
    
    except Exception as e:
        print(f"❌ Create status test failed: {e}")
    
    try:
        # Test 3: Get status checks
        print("\n🔍 Testing GET /api/status (get status checks)...")
        response = requests.get(f"{api_base}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Get status checks working correctly (returned {len(data)} items)")
                results["get_status"] = True
            else:
                print(f"❌ Get status returned non-list data: {type(data)}")
        else:
            print(f"❌ Get status failed with status {response.status_code}")
    
    except Exception as e:
        print(f"❌ Get status test failed: {e}")
    
    # Summary
    print("\n" + "="*50)
    print("BACKEND API TEST SUMMARY")
    print("="*50)
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend API tests PASSED!")
        return True
    else:
        print("⚠️  Some backend API tests FAILED!")
        return False

if __name__ == "__main__":
    success = test_backend_apis()
    sys.exit(0 if success else 1)