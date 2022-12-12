import RegisterForm from "./components/RegisterForm"

// Use `jest.fn` to create a mock function
const mockFetch = jest.fn();

// Use `mockFetch` as the default implementation for `fetch`
global.fetch = mockFetch;

// Create a test post request
async function postRequest() {
  const response = await fetch('example.com', {
    method: 'POST',
    body: JSON.stringify({
      username: "Anisha",
      email: "Anisha@mail.com",
      city: "Bristol",
      pw_hash: "examplePassword"
    })
  });
  return response.json();
}

// Mock the response from the server
mockFetch.mockResolvedValue({
  json: () => Promise.resolve({
    username: "Anisha",
    email: "Anisha@mail.com",
    city: "Bristol",
    pw_hash: "examplePassword"
  })
});

// Test the post request
test('test post request', async () => {
  const response = await postRequest();
  expect(response).toEqual({ 
    username: "Anisha",
    email: "Anisha@mail.com",
    city: "Bristol",
    pw_hash: "examplePassword"
  });
});
