<div className="techs-container">
    <div className="techs-icons">
        <IconContext.Provider value={{ size: '1.6rem', style: { verticalAlign: 'middle' } }}>
            <p className="tooltip"><DiHtml5 className="techicon" /><span className="tooltiptext2">HTML5</span></p>
            <p className="tooltip"><DiCss3 className="techicon" /><span className="tooltiptext2">CSS3</span></p>
            <p className="tooltip"><DiJsBadge className="techicon" /><span className="tooltiptext2">Javascript</span></p>
            {/* <p className="tooltip"><DiReact id="reactjssvg" className="techicon" /><span className="tooltiptext2">ReactJs</span></p> */}
            <p className="tooltip"><img id="reactjs" className={["techicon", "colin-icon"].join(' ')} src={reactjssvg} alt="firebase logo"></img><span className="tooltiptext2">React Js</span></p>
            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={firebasesvg} alt="firebase logo"></img><span className="tooltiptext2">Firebase</span></p>
            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={leafletsvg} alt="firebase logo"></img><span className="tooltiptext2">Leaflet.js</span></p>
            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={chartjssvg} alt="firebase logo"></img><span className="tooltiptext2">Chart.js</span></p>
            <p className="tooltip"><img id="momentjs" className={["techicon", "colin-icon"].join(' ')} src={momentjssvg} alt="firebase logo"></img><span className="tooltiptext2">Moment.js</span></p>
            <p className="tooltip"><img id="momentjs" className={["techicon", "colin-icon"].join(' ')} src={herejssvg} alt="firebase logo"></img><span className="tooltiptext2">Here.js</span></p>
            <p className="tooltip"><IconContext.Provider value={{ size: '1.8rem', style: { verticalAlign: 'middle' } }}><DiGithubBadge id="github" className="techicon" /></IconContext.Provider><span className="tooltiptext2">Github</span></p>
        </IconContext.Provider>
    </div>
</div>