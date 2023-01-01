<script>
    let principal=1,rate=1,time=1,output=0,ans=0;
    $: output=(principal*rate*time)/100;
    let cleaner= () =>
    {
      principal=0,rate=0,time=0,output=0,ans=0;
    }
    </script>
    <h3>Simple Interest</h3>
    <h5>Rate of Interest Percentage: <input type="text" bind:value={rate} placeholder="Enter the Rate of Interest percentage"><br></h5>
    <h5>Principal Amount:<input type="text" bind:value={principal} placeholder="Enter the Principal Amount"><br></h5>
    <h5>Time: <input type="text" bind:value={time} placeholder="Enter the Time Duration"><br></h5>
    <p> Total Amount: {output} </p>
    <button on:click={cleaner}>Clear</button> <input type="text" bind:value={output}> 
    <style>
    p{
      color: blue;
    }
  button{
  background: #5E5DF0;
  border-radius: 999px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  }
</style>
    
    