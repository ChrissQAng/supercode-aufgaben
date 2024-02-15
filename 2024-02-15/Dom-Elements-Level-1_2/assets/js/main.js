let div = document.body.children[0];

const myFunction = () => {
  let childChild = div.children[3].children[0];
  childChild.classList.toggle("red");
  for (let i = 0; i < div.children.length; i++) {
    let child = div.children[i];
    if (child.classList.contains("example")) child.classList.toggle("red");
  }
};
