"use client";
interface Details {
  details_fr: string;
  details_ar: string;
}

const ProductDesc = ({ details }: { details: Details }) => {
  return (
    <article className="mb-20 px-6 md:px-20">
      <h3 className="text-4xl text-gray-800 font-bold mt-10 mb-4">Details:</h3>
      {localStorage.getItem("language") === "ar"
        ? details.details_ar.split(',,,').map((el) => (
            <div
              key={el}
              className="odd:bg-slate-200 border-b border-b-gray-400 bg-gray-800 p-2 text-lg font-semibold text-white odd:text-gray-800"
            >
              {el}
            </div>
          ))
        : details.details_fr.split(',,,').map((el) => (
            <div
              key={el}
              className="odd:bg-slate-200 border-b border-b-gray-400 bg-gray-800 p-2 text-lg font-semibold text-white odd:text-gray-800"
            >
              {el}
            </div>
          ))}
    </article>
  );
};

export default ProductDesc;
