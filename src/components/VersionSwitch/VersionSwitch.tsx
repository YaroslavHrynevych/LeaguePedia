import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentVersion} from "../../state/VersionSlice.ts";

const VersionSwitch = () => {
    const versions = useSelector((store: any) => store.version.versions)
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrentVersion(e.target.value));
    }

    if(versions.length == 0){
        return null
    }

    return (
        <div className='flex gap-1 font-bold uppercase'>
            <h2 className=''>Version:</h2>
            <select onChange={handleChange}>
                {versions.map((version:string, index:number) => {
                    return <option key={index} value={version}>{version}</option>
                })}
            </select>
        </div>

    );
};

export default VersionSwitch;