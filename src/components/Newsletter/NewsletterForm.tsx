interface FormNewsletter {
  name: string;
  email: string;
  send: string;
}
const NewsletterForm = ({ name, email, send }: FormNewsletter) => {
  const labelStyle = "font-semibold text-gray-800 mb-1 mt-4 block";
  const inputStyle =
    "block w-full rounded py-2 px-4 border border-gray-300 focus:outline-none focus:border-gray-400";
  return (
    <form className="block">
      <label htmlFor="name" className={`${labelStyle}`}>
        {name}
      </label>
      <input type="text" name="name" id="name" className={`${inputStyle}`} />
      <label htmlFor="email" className={`${labelStyle}`}>
        {email}
      </label>
      <input type="email" name="email" id="email" className={`${inputStyle}`} />
      <button
        type="submit"
        className="text-white bg-primary hover:bg-primary-dark rounded text-lg py-2 px-5 mt-4 cursor-pointer select-none"
      >
        {send}
      </button>
    </form>
  );
};

export default NewsletterForm;
