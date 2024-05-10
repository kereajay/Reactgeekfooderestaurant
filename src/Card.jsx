import { GeoAltFill } from 'react-bootstrap-icons';
const Card = ({ name, address, outcode, postcode, rating, typeoffood,url, address2, }) => {
    const stars = ["⭐", "⭐", "⭐", "⭐", "⭐"];
    let stracount=Math.floor(rating);

    let starsa=[];
    for(let i=0;i<stracount;i++){
        starsa.push(stars[i])
    }
    // console.log(stracount)
    return (
        <>
            <div className=' shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='p-6'>
                    <div className=''>
                        <h1 className='text-2xl'>{name}</h1>
                       <p className='text-xl '>{starsa}</p>


                    </div>
                    
                    <div className='flex flex-row mt-2 '>
                        <GeoAltFill />
                        <p>{address} {address2}</p>

                    </div>
                    <p className='mt-2'>{outcode} {postcode}</p>
                </div>

                <div className='w-[100%]  p-6  shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                    <div className='flex flex-row' >
                        <img src="https://www.svgrepo.com/show/277625/cutlery-spoon.svg" alt="" width={20} />
                        <p className='text-green-400'>{typeoffood}</p>
                    </div>
                    <br />
                    <a href={url} className='text-blue-400'>Visit Menu</a>
                </div>
            </div>

        </>
    )
}
export default Card;