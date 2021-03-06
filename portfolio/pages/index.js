import Link from 'next/link'

export default () => (
  <div id="projects">

     <div className="project-tile">
		    <div className="project-image"> 
		 		<img src="/static/images/css-image-tile.png" alt="Placeholder"/>
		    </div>
		   <div className="project-info">
		    <span className="title">(coming soon) CSS images</span>
		    <span className="description">100 days CSS challenge</span>
	   </div>
    </div>

     <div className="project-tile">
             <Link href="/daily-ui"> 
	    		<a>
			    	<div className="project-image"> 
			 			<img src="/static/images/uidaily.png" alt="Placeholder"/>
			    	</div>
					   <div className="project-info">
					    <span className="title">Daily UI</span>
					    <span className="description">100 days design challenge</span>
				   	</div>
			   	</a>
			  </Link>
    </div>


    <div className="project-tile">
        <Link href="/aardvark"> 
		    <a>
			    <div className="project-image"> 
		 			<img src="/static/images/the-aardvark-tile.png" alt="The aardvark"/>
			    </div>
	
				<div className="project-info">
					<span className="title">Designlab's The Aardvark</span>
					<span className="description">UI design workshop </span>
  				</div>
	      </a>
    	</Link>
    </div>
  

      <div className="project-tile">
  		    <Link href="/hinoki"> 
			    <a>
				    <div className="project-image"> 
				 			<img src="/static/images/hinoki-mockup.png" alt="Picture Hinoki"/>
				    </div>

		  		   <div className="project-info">
					    <span className="title">Hinoki Rotterdam Website</span>
					    <span className="description">a design and prototype</span>
				   	</div>
		      </a>
    	</Link>

    </div>

       <div className="project-tile"> 
		   <div className="project-info portfolio-tile">
		     <div className="project-image"> 
	 	 			🌈 
	    	</div>
		      
		 
		    <span className="title">Want to see more works?</span>
		    <span className="send-email">Ask and you shall receive! Just send me an email at <a href="mailto:yilinghsia@gmail.com?Subject=I'd like to see your design portfolio!" target="_top">yilinghsia@gmail.com</a> and i'll send you my design portfolio!</span>
		   </div>
    </div>

  </div>
)