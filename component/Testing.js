import Image from 'next/image'

function Testing() {
    return (
        <div className='h-[600px] w-full'>
            <Image src='/pentagon.jpg'
            width={1400}
            height={800} 
            className='w-full h-[600px]'/>
            
        </div>
    )
}

export default Testing 
