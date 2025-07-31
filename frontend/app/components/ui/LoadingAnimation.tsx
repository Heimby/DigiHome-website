export default function LoadingAnimation() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="loading loading-spinner loading-xl" />
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p>Please wait while we load the data.</p>
      </div>
    </>
  );
}
