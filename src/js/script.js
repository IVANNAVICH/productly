// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);


 const names = ["John", "Jane", "Bob", "Alice", "Mary"];
 console.log(names[0]);
 names[0] = "Peter";
 console.log(names[0]);
 names[names.length - 1] = "xxx"
 console.log(names);
 console.log(names.length);
 
 for (let i = 0, len = names.length; i < len; i++) {
  console.log("hello " + names[i]);
  
 }

 let a = 456;
 a %= 6;
 console.log(a);