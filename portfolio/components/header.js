import { withRouter } from 'next/router';
import Link from './link';

const menuItems = [
   {name: 'about', href: '/about'},
   {name: 'portfolio', href: '/'},
   {name: 'timeline', href: '/timeline'}
];

const Header = ({ router, children, ...props }) => (
	<div className="site-header">
		<h3><a href="/">Yi Ling Hsia</a></h3>
		<p>Front-end developer and designer</p>	 

		<nav className="site-nav">
		{
			menuItems.map(menuItem => 
				<Link activeClassName="active" key={menuItem.name} href={menuItem.href}> 
					<a>{menuItem.name}</a>
				</Link>
			)
		}
		</nav>


		<div className="portfolio">
			<div className="section-line">
				<span className="section-heading"> 
					{
						(() => { 
							switch(router.pathname){
							case '/about':
								return 'hello! nice to meet you';
							case '/':
								return 'the works';
							case '/timeline':
								return "what i've been up to";
							case '/hinoki':
								return "Hinoki Rotterdam";
							case '/aardvark':
								return "The Aardvark";
							case '/daily-ui':
								return "Daily UI ";
							}
						})()						
					}
				</span>
			</div>
		</div>
	</div> 
); 

 

export default withRouter(Header);

