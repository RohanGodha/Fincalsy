<script>
  import { each } from "svelte/internal";
  import Card from "./Card.svelte";
  import SICalc from "./SICalc.svelte";
  import { db } from "./firebase.js";
  import { doc, getDoc } from "firebase/firestore";
  import { collection, query, where, getDocs } from "firebase/firestore";

  let visitors=[];
  let fetchDocument = async () => {
    let docSnap = await getDoc(doc(db, "visitors", "yoyorodha@gmail.com"));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  
  fetchDocument();
  let fetchCollection=async()=>{
  const querySnapshot = await getDocs(query(collection(db,"visitors")));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    visitors.push(doc.data());
    visitors=[...visitors,doc.data()];
  });
  //visitors=visitors;
}
fetchCollection();

  // var name = "Rohan Godha";
  // let age = 20;
  // let lst = ["A", "B", "C"];
  // let updateAge = () => {
  //   age++;
  // };

  // $: upperCase = name.toUpperCase();
</script>

<main>
  {#each visitors as visitor}
  <p>{visitors[0].name}</p>
  {/each  }
  <!-- {#if name === "Rohan Godha"}
    <Card heading={"Title of Page"} paragraph={"Fincalsy"} />
  {:else}
    <Card heading={"Heading B"} paragraph={"Godha Paragraph"} />
  {/if}
  <p>
    Hello World! Welcome to today's session. My name is <span
      class="text-underline">{upperCase}</span
    >. My age is {age}.
  </p>
  <button on:click={updateAge}>Click Me</button>
  <input type="text" bind:value={name} />
  <h2>Financial Calculator</h2>
  <SICalc />

  {#each lst as l}
    <p>
      <Card heading={"Heading" + l} paragraph={"Rohan Godha Paragraph"} />
    </p>
  {/each} -->
</main>

<style>
  p {
    color: blue;
  }
  button {
    background: #5e5df0;
    border-radius: 999px;
    box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
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
