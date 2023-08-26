import {Post} from "@/types/Post";

const url: string = "https://jsonplaceholder.typicode.com/posts/";

function success(message: string) {
    console.log(message);
}
//

export default async function fetchArticles( ) {
    const res = await fetch(url)

    if (!res.ok) throw new Error('failed to fetch articles')

    return res.json()
}

// export default async function fetchArticles() {
//   const res = await fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           return Promise.reject(response);
//         }
//         return response.json();
//       })
//       .then(() => {
//         success("The article was created!");
//       })
//       .catch((response) => {
//         throw new Error("An error occurred " + response.status) // Trigger ErrorBoundary?
//       });
// }
//
// export default async function fetchArticle(id:string) {
//   const res = await fetch(url+id)
//       .then((response) => {
//         if (!response.ok) {
//           return Promise.reject(response);
//         }
//         return response.json();
//       })
//       .then(() => {
//         success("The article was created!");
//       })
//       .catch((response) => {
//         throw new Error("An error occurred " + response.status) // Trigger ErrorBoundary?
//       });
// }


// import { notify } from "notiwind";
// import { Post } from "~/types/Post";

// const url = "https://jsonplaceholder.typicode.com/posts/";
//
// import React, {Component} from 'react';
//
// class ArticlesRepository extends Component {
//   render() {
//     return (
//         <div>
//         </div>
//     );
//   }
// }
//
// export default ArticlesRepository;
//
// export default function () {
//   function success(message: string) {
//     // @ts-ignore
//     navigateTo("/admin").then(() => {
//       notify(
//         {
//           group: "messages",
//           title: "Success",
//           type: "success",
//           text: message,
//         },
//         3000,
//       );
//     });
//   }
//
//   function error(message: string) {
//     notify(
//       {
//         group: "messages",
//         title: "Error",
//         type: "error",
//         text: message,
//       },
//       3000,
//     );
//   }
//
//   async function fetchArticles() {
//     return await fetch(url).then((response) => response.json());
//   }
//
//   async function fetchArticle(id: string) {
//     return await fetch(url + id).then((response) => response.json());
//   }
//
//   async function fetchArticleComments(id: string) {
//     return await fetch(url + id + "/comments").then((response) =>
//       response.json(),
//     );
//   }
//
//   async function createArticle(data: Post) {
//     return await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         return Promise.reject(response);
//       })
//       .then(() => {
//         success("The article was created!");
//       })
//       .catch((response) => {
//         error("An error occurred " + response.status);
//       });
//   }
//
//   async function updateArticle(data: Post) {
//     return await fetch(url + data.id, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => {
//         if (response?.ok) {
//           return response.json();
//         }
//         return Promise.reject(response);
//       })
//       .then(() => {
//         success("The article was updated!");
//       })
//       .catch((response) => {
//         error("An error occurred " + response.status);
//       });
//   }
//
//   async function deleteArticle(id: string) {
//     return await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response?.ok) {
//           return response.json();
//         }
//         return Promise.reject(response);
//       })
//       .then(() => {
//         success("The article was deleted!");
//       })
//       .catch((response) => {
//         error("An error occurred " + response.status);
//       });
//   }
//
//   return {
//     fetchArticles,
//     fetchArticle,
//     fetchArticleComments,
//     createArticle,
//     updateArticle,
//     deleteArticle,
//   };
// }
