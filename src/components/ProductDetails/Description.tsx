import Review from "./Review"

type DescriptionProps = {
    review: boolean,
    setReview: React.Dispatch<React.SetStateAction<boolean>>
}


const Description = ({ review, setReview }: DescriptionProps) => {
    const handleReview = () => {
        setReview(!review)
    }
    const buttonStyle = "border w-[7.78813rem] border-solid border-[#D3CED2] flex justify-center items-center py-3 px-4";

    return (
        <div className="bg-white pt-16 px-3 ">
            <div className="flex pl-3">
                <button onClick={handleReview} className={buttonStyle}>Description</button>
                <button onClick={handleReview} className={buttonStyle}>Reviews</button>
            </div>
            {review ? (<Review />) : <div className="border-b-2 pl-5 pt-7 pb-11 flex flex-col gap-5 ">
                <h3 className="text-black font-bold text-lg">Description</h3>
                <p className="text-text-light">Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames
                    ac turpis egestas. Vestibulum tortor
                    quam, feugiat vitae, ultricies eget,
                    tempor sit amet, ante. Donec eu libero
                    sit amet quam egestas semper. Aenean
                    ultricies mi vitae est. Mauris placerat
                    eleifend leo.</p>
            </div>}
        </div>
    )
}

export default Description