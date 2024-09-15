import React from 'react'
import AllProjects from '../../Sections/AllProjects/AllProjects'
import { Helmet } from 'react-helmet'

export default function ProjectsPage() {
  return (
    <div>
         <Helmet>
        <title>ProjectsPage-Rukshanda</title>
        <meta name="description" content="This is Projects Page of Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>
        <AllProjects/>
    </div>
  )
}
