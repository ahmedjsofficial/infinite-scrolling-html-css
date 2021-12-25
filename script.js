const posts = document.querySelector(".posts");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const API_URL = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`;

const fetchPost = async () =>{
	const request = await fetch(API_URL).then((api_Data) =>{
		return api_Data.json();
	}).then((jsonData) =>{
		jsonData.map((value, index) =>{
			const HTML_Data = `
				<div class="card">
					<div class="card-header"><span>${postCount++}</span></div>
					<div class="card-body">
						<h1>${value.title}</h1>
						<p>${value.body}</p>
					</div>
				</div>
			`;
			posts.insertAdjacentHTML('beforeend', HTML_Data);
		})
	});
	

}	
fetchPost();

const showPosts =()=>{
	setTimeout(()=>{
		pageCount++;
		fetchPost();
	}, 300)
}

window.addEventListener('scroll', ()=>{
	const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

	if(scrollTop + clientHeight >= scrollHeight){
		showPosts();
		console.log('boottom')
	}
})



// const request = await fetch(API_URL);
// const data = await request.json();

// data.map((value, index) =>{
// 	const HTML_Data = `
// 		<div class="card">
// 			<div class="card-header"><span>${postCount++}</span></div>
// 			<div class="card-body">
// 				<h1>${value.title}</h1>
// 				<p>${value.body}</p>
// 			</div>
// 		</div>
// 	`;
// 	posts.insertAdjacentHTML('beforeend', HTML_Data);
// })