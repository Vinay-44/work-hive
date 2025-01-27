const { useState } = require("react");
const { toast } = require("sonner");

export  const useGetData = (cb) => {
    const [data,setData]=useState(undefined);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fn = async (...args) => {
        setLoading(true);
        try {
            const res = await cb(...args);
            setData(res);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
            toast.error(error.message);
        }
    }

    return {data,loading,error,fn,setData}
}