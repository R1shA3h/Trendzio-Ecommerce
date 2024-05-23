import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React,{Dispatch,FormEvent,SetStateAction, useState} from "react";

interface PropsType{
    
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({setOpenPopup, setUpdateTable}: PropsType) =>{
    
    const productData = useAppSelector((state)=> state.productReducer)
    const dispatch = useAppDispatch()

    const [inputData,setInputData]=useState({
        name: productData.name,
        category: productData.category,
        price: productData.price
    })

    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()
        dispatch(setLoading(true))

        axios.put(`/api/edit_product/${productData._id}`,inputData).then(res=>{
            makeToast("Product Updated Successfully!")
            setUpdateTable((prevState)=>!prevState);
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
            dispatch(setLoading(false));
            setOpenPopup(false);
        });
    };
    
    
    return <div>Popup</div>
}
export default Popup;