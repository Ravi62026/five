/**
 * CMS API Service
 * Handles all CMS page API calls
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Get all active CMS pages
 * @returns {Promise<Array>} Array of CMS pages
 */
export async function getAllCMSPages() {
  try {
    const response = await fetch(`${API_BASE_URL}/cms`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CMS pages: ${response.statusText}`);
    }

    const result = await response.json();
    
    if (result.success && result.data?.cmsPages) {
      return result.data.cmsPages;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching CMS pages:', error);
    // Return empty array on error to prevent breaking the UI
    return [];
  }
}

/**
 * Get a single CMS page by CMS ID
 * @param {string|number} cmsId - The CMS identifier (1, 2, 3, or 4)
 * @param {string} lang - Optional language preference: 'en' or 'ar'
 * @returns {Promise<Object|null>} CMS page object or null if not found
 */
export async function getCMSPage(cmsId, lang = null) {
  try {
    let url = `${API_BASE_URL}/cms/${cmsId}`;
    if (lang) {
      url += `?lang=${lang}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch CMS page: ${response.statusText}`);
    }

    const result = await response.json();
    
    if (result.success && result.data?.cms) {
      return result.data.cms;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching CMS page:', error);
    return null;
  }
}

/**
 * Get CMS page route based on CMS ID
 * @param {string|number} cmsId - The CMS identifier
 * @returns {string} Route path
 */
export function getCMSPageRoute(cmsId) {
  const routeMap = {
    '1': '/terms-condition',
    '2': '/privacy-policy',
    '3': '/data-deletion-policy',
    '4': '/cancellation-policy',
  };
  
  return routeMap[cmsId?.toString()] || '/';
}

/**
 * Get CMS ID from route
 * @param {string} route - The route path
 * @returns {string|null} CMS ID or null
 */
export function getCMSIdFromRoute(route) {
  const routeMap = {
    '/terms-condition': '1',
    '/privacy-policy': '2',
    '/data-deletion-policy': '3',
    '/cancellation-policy': '4',
  };
  
  return routeMap[route] || null;
}

/**
 * Get CMS page name for display
 * @param {Object} cmsPage - CMS page object
 * @param {string} lang - Language preference: 'en' or 'ar'
 * @returns {string} Display name
 */
export function getCMSDisplayName(cmsPage, lang = 'en') {
  if (!cmsPage) return '';
  
  if (lang === 'ar' && cmsPage.nameAr) {
    return cmsPage.nameAr;
  }
  
  return cmsPage.nameEn || cmsPage.name || '';
}

