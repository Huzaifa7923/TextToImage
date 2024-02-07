const generateImage=async(prompt,size)=>{
    try{
        showSpinner();
        // console.log('inside GENERATEIMAGE FT')
        const response=await fetch('/openai/generateimage',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                prompt,
                size
            })
        })
        // console.log('error nahi aaya')
        if(!response){
            removeSpinner();
            throw new Error('The image could not be generated')
        }
        const data=await response.json();
        // console.log('data : '+data)
        const imageUrl=data.data;
        // console.log('imageUrl  '+imageUrl);
        document.querySelector('#image').src=imageUrl;
        hideSpinner();
    }catch (error) {
        console.log(error)
    }
}


function onsubmit(e){
    // console.log('button clicked')
    e.preventDefault();

    
    document.querySelector('.msg').textContent='';
    document.querySelector('#image').src='';

    const prompt=document.querySelector('#prompt').value
    const size=document.querySelector('#size').value

    if(prompt===''){
        alert('Please add discription of your image')
        return ;
    }
    // console.log('generated image will now be called')
    generateImage(prompt,size);

}

const showSpinner=()=>{
    document.querySelector('.lds-spinner').style.display='block';
}
const hideSpinner=()=>{
    document.querySelector('.lds-spinner').style.display='none';
}
// showSpinner();
// setTimeout(()=>{
//     hideSpinner();
// },3000)

document.querySelector('#image-form').addEventListener('submit',onsubmit);


