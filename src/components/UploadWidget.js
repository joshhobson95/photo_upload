import { useEffect, useRef } from "react"



const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() =>{
        cloudinaryRef.current = window.cloudinary;
       widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dgsmrwqfu',
            uploadPreset: 'szbpzmma'
        }, function(error, result) {
            console.log(result);
        });
    }, [])
    return(
        <div>
            <button onClick={() => widgetRef.current.open()} className="upload">Upload!</button>
        </div>
    )



}
 export default UploadWidget