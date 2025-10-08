
// pages/contact.js ya pages/content.js
const ContactPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <p>This is working!</p>
    </div>
  );
};

export default ContactPage;




// Ya agar tu kuch dynamic cheez sirf client pe chala raha hai, to useEffect mein daal:
// useEffect(() => {
//   const params = new URLSearchParams(window.location.search);
//   const value = params.get('yourParam');
//   console.log(value);
// }, []);






