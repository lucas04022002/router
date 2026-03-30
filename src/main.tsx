import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";

// page components

import Home from "./page/Home";
import About from "./page/About";
import Article from "./page/Articles";

// router creation

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/articles/:id",
				element: <Article />,
			},
		],
	},
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
