const logOutIfNotAuthorized = async (response: Response) => {
  if (response.status === 401) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    await post('/person/logout');
    window.location.assign('/login');
  }
};

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const commonOptions: {
  credentials: RequestCredentials,
  headers: Headers,
} = {
  credentials: 'include',
  headers,
};

export const post = async <T, B>(
  url: string,
  body?: B,
): Promise<T> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method: 'POST',
    body: typeof body === 'object' ? JSON.stringify(body) : undefined,
    ...commonOptions,
  });

  await logOutIfNotAuthorized(response);

  if (!response.ok) {
    throw await response.json();
  }

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.status}`);
};

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method: 'GET',
    ...commonOptions,
  });

  await logOutIfNotAuthorized(response);

  if (!response.ok) {
    throw await response.json();
  }

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.status}`);
};

export const getFile = async (url: string): Promise<Blob> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method: 'GET',
    ...commonOptions,
  });

  await logOutIfNotAuthorized(response);

  if (!response.ok) {
    throw await response.json();
  }

  if (response.ok) {
    return response.blob();
  }

  throw new Error(`${response.status}`);
};
