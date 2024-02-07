const openAi=require('openai')

const openai=new openAi({apiKey:process.env.OPEN_AI_KEY})

const generateImage=async(req,res)=>{
    const {prompt,size} = req.body;

    const imageSize=
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
try{
const response = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    size:imageSize,
  });
  // console.log(response.data[0].url)
  const image_url = response.data[0].url;    
  res.json({
    success:true,
    data:image_url
  });
}catch (error) {

    console.log(error?.message||error);
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
}

module.exports={generateImage}
