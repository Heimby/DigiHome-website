export type LeadCreateRequest = {
  address?: string | null;
  /**
   * Optional note for the lead, can be used to capture additional information or context early in the process.
   */
  note?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};

export type LeadCreateResponse = {
  success?: boolean;
  message?: string | null;
  /**
   * Potential link to the created opportunity if applicable.
   * This can be used to redirect the user to the opportunity details page after creation.
   * Where owner can add more information or cancel the lead if needed.
   */
  opportunityLink?: string | null;
};
