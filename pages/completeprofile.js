import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ApplicationForm from '../component/ApplicationForm'
function completeprofile() {
    return (
        <div className='grid w-full grid-cols-12'>
            <div className='flex pt-5 justify-center col-span-12 w-full h-[250px] bg-[#1e56a0]'>
                <div>
                    <h1 className='text-6xl text-white'>Application</h1>
                </div>
                <div>
                    <PermIdentityOutlinedIcon style={{fontSize:80, color:'white'}}/>
                </div>

            </div>
            <div className='col-span-12 flex justify-center w-full h-[375px] bg-[#80808061]'>
                <div className='w-[700px] mt-[-160px]'>
                    <ApplicationForm/>
                </div>
            </div>
        </div>
    )
}

export default completeprofile
