// THIS DOESN'T RUN ON THE SITE
// THIS IS INSTEAD THE CODE USED IN THE AWS LAMBDA FUNCTION THAT'S CALLED BY /HI
// IM PUTTING IT HERE FOR DOCUMENTATION AND INCASE I EVER NEED TO MAKE IT AGAIN

export const handler = async (event) => {
  const result = await fetchData(); 
  return result;
};

async function fetchData() {
  try {
    const response = await fetch("http://1.2.3.4:5000"); // INSERT YOUR IP HERE
  
    const data = await response; // Wait for JSON parsing
    const newresponse = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({msg: "hell yeah i did it"}),
    };
    return newresponse; // Only returns after fetch is completed
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error if needed
  }
}
