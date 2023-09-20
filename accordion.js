/* STEP 5: ACCORDION
Aim: Create an Accordion menu using HTML

| ./accordion.html |

[ ] Build out the HTML
Create an article that holds three <details> tags and their <summary> & <p> content
<!-- * MAIN CONTENT * -->
<main class="container">
	<h1>JS Accordion!</h1>

	<article class="accordion-container">
		<details>
			<summary>What is HTML?</summary>
			<p>
				<strong>HTML</strong> (Hyper-Text Markup Language) is the standard markup language for documents
				designed to be displayed inside a web browser.
			</p>
		</details>
		<details>
			<summary>What is CSS?</summary>
			<p>
				<strong>CSS</strong> (Cascading Style Sheets) is a style sheet language used for describing the
				presentation of a document written in a markup language such as HTML.
			</p>
		</details>
		<details>
			<summary>What is JavaScript?</summary>
			<p>
				<strong>JavaScript</strong> is a dynamic programming language used for web development, software
				applications, game creation, machine learning, and more.
			</p>
		</details>
	</article>
</main>
🔻

| ./accordion.css |

[ ] Style the Container
.accordion-container {
	display: flex;
	flex-direction: column;
	width: clamp(250px, 30%, 500px);
	margin: 1em auto;
}
🔻

[ ] Style the Toggles & Content
details {
	width: 100%;
	text-align: left;
	margin: 1em 0;
	padding: 1em 2em;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
		0px 2px 4px -1px rgba(0, 0, 0, 0.2);
}

details[open] {
	background-color: #f1f5f9;
}

summary {
	color: #075985;
	font-size: 2rem;
	cursor: pointer;
}

details p {
	font-size: 1.5rem;
	color: #1e293b;
}
🔻

Check: Ensure the menu's toggle

Can you click on the element to open its summary and content?
Can you tab through the menu effectively? */


