import Link from 'next/link'

export default () => (
  <div id="projects">

     <div className="project-tile">
		    <div className="project-image"> 
		 		<img src="/static/images/placeholder.png" alt="Placeholder"/>
		    </div>
		   <div className="project-info">
		    <span className="title">(coming soon) CSS images</span>
		    <span className="description">100 days CSS challenge</span>
	   </div>
    </div>

     <div className="project-tile">
		    <div className="project-image"> 
		 		<img src="/static/images/placeholder.png" alt="Placeholder"/>
		    </div>
		   <div className="project-info">
		    <span className="title">(coming soon)  Daily UI</span>
		    <span className="description">100 days design challenge</span>
	   </div>
    </div>


    <div className="project-tile">
	    <div className="project-image"> 
	 			<img src="/static/images/the-aardvark.png" alt="The aardvark"/>
	    </div>
		    <Link href="/aardvark"> 
			    <a>
						<div className="project-info">
							<span className="title">Designlab's The Aardvark</span>
							<span className="description">UI design workshop </span>
		  			</div>
		      </a>
	    	</Link>


    </div>
  

      <div className="project-tile">
		    <div className="project-image"> 
		 			<img src="/static/images/hinoki-tile.png" alt="Picture Hinoki"/>
		    </div>
		    <Link href="/hinoki"> 
			    <a>
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