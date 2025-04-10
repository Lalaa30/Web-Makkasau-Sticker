/**
 * Format a date string to Indonesian format (DD Month YYYY)
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date in Indonesian format
 */
export const formatDateToIndonesian = (dateString) => {
    if (!dateString) return '-';
    
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };
  
  /**
   * Get today's date in YYYY-MM-DD format
   * @returns {string} Today's date in YYYY-MM-DD format
   */
  export const getTodayISOString = () => {
    return new Date().toISOString().split('T')[0];
  };
  
  /**
   * Generate a random order number with the format MS-YYMMDD-XXXX
   * @returns {string} Random order number
   */
  export const generateOrderNumber = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().substr(-2);
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    return `MS-${year}${month}${day}-${random}`;
  };