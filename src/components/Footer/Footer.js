import React from 'react'

// const style = {
//     footerStyle: {
//         width: '25%'
//     }
// }

function Footer() {
    return(

        <footer class="text-center text-white">
          <h1 id="Contact" class="mt-5">Lets Keep in Touch</h1>
          <div class="container pt-4">
            
            <section class="mb-4">
                
                <a id="resume-button" class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" role="button">
                <i class="fa-solid fa-envelope"></i> victoriacdunlap@gmail.com
                </a>


                <a id="resume-button" class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="mailto:victoriacdunlap@gmail.com" role="button">
                <i class="fa-brands fa-github"></i> GitHub
                </a>

                <a id="resume-button" class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/victoria-dunlap/" role="button">
                <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>

                <a id="resume-button" class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://twitter.com/DunlapCharli" role="button">
                <i class="fa-brands fa-twitter"></i> Twitter
                </a>

            </section>
       
          </div>
         
        </footer>
  )
}

export default Footer