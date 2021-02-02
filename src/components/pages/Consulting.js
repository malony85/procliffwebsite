import React from 'react';
import '../../App.css';
import consultingImg from '../../images/consultingImg.jpg';
import consultingHomeImg from '../../images/2.jpg';


import Footer from '../Footer';


 function Consulting() {
  return (
  <>
    <div className='consultbanner'>
      <h5>Consulting Services</h5>
    </div>
    <br/>
    <div class="wrapper">
    <img src={consultingHomeImg} alt="consultingHomeImg" class="consultImg"/> 
      <p className='consultHomeP'>
      Hardworking, talented and experienced IT workforce is essential to bring a business strategy to life and ensuring that
       the organization accomplishes its planned objectives.<br/> At Progressive Cliff, we offer a full spectrum of IT staffing services 
       to help you meet the needs of your organization with the right people, skills and competencies.<br/>
We have an extensive experience of providing recruitment solutions to a wide range of businesses.
 Our dedicated talent acquisition team thoroughly assesses your workforce needs, develops a customized staffing strategy,
  and delivers you qualified human resource that accelerates your business growth and helps you build a sustainable competitive 
  advantage.<br/>
We strive to fill the vacancy, strategically important positions in your organization with the right people at the right time, 
without compromising on quality. To add to the efficiency of the staffing process and offer you complete visibility and control, 
we develop timelines and set measurable targets. <br/>Our staffing consultants develop sourcing profiles and strategies and 
recruit qualified individuals accordingly to offer the best person-job fit. The result of this whole exercise is a productive
 and agile IT workforce that drives your business forward and helps your organization reach new heights of success.

      </p>
    </div>
   
      <br/><br/>
      <p className='dev_p'>
      <p class="consultcardTitle">The Recruitment Cycle</p>
   <img src={consultingImg} alt="consulting" class="consultImg"/> <br/>
    
    At Progressive Cliff we aim to find the right fit for the right job at the right time. 
    It is detailed and step by step process to bring talented people to the organizations.
    To add to the efficiency of the staffing process and offer you complete visibility and control, 
    we develop timelines and set measurable targets. Our staffing consultants develop sourcing profiles and strategies
     and recruit qualified individuals accordingly to offer the best person-job fit. 
     The result of this whole exercise is a productive and agile IT workforce that drives your business forward 
     and helps your organization reach new heights of success.
     <br/><br/>
        There are 6 steps in recruitment process that may vary company to company depending on the business infrastructure.
        These 6 steps are:
        <b>
        <ul>
        <li className='listStyle'>Preparing</li>
        <li className='listStyle'>Sourcing</li>
        <li className='listStyle'>Screening</li>
        <li className='listStyle'>Selecting</li>
        <li className='listStyle'>Hiring</li>
        <li className='listStyle'>Onboarding</li>
       </ul>
       </b>
        <br/>
       
<b>Preparing:</b>
It is important to know what you need in the first place in the company whether it is newly formed or just vacated. Always start with identifying the vacancies that are followed by the job specifications that includes the knowledge, experience and skills. Here is how you prepare your hiring needs or wants:
Find out the current teams gaps and check the way to fix them. Also check if you have needs in terms of ability, personality or performance. Keep the tracks of the input vs. output when it comes to the team to prepare for the hiring needs. Increased workload also means that you need more hiring.
This process begins with the receiving the requisition of recruitments from different departments to the HR. It may contain:
Experience and Qualifications required.
Number of posts need to be filled.
Number of new positions required.
Duties to be performed.
<br/><br/>
<b>Sourcing:</b>
Sourcing is the process of finding resumes for specific jobs defined. After knowing the need of recruitments in company the next step is to start sourcing people for different job niches. Identifying the right talent for the right job is the most important step in the recruitment process. The jobs are advertised internally and externally to find the best referrals on popular social sites or job portals.
Try to describe the sort of person who can easily carry out the tasks you have outlined. Remember that a person may be ideal for one job description. Just go through the key tasks, qualities and skills, the person will need to be able to carry them out. Sourcing is many times used to refer to the highly specialized and qualified talent searches.
<br/><br/>
<b>Screening:</b>
The third step is the resume screening that is the most important and time consuming part of recruiting. It almost takes 23 hours for just single hiring. Mostly organizations receive 250 resumes on average and almost 80% people are not qualified for them. The majority of talent acquisition leaders still find it hardest to screen the right candidates from the large pool of applicants. It is basically a process of determining whether the candidate is qualified for the role based education, experience or other information on their resume. The goal of screening resumes is to decide whether to move the applicant forward or not.
<br/><br/>
<b>Selecting:</b>
In the section phase, shortlisted candidates will go through the interview process. Depending on the size of the hiring team and the unique recruitment needs several interviews may be scheduled for every candidate. This process continued until the right one is selected for the specific job. Interview can be done on phone or video calls sometimes.
<br/><br/>
<b>Hiring:</b>
The second last stage of the recruitment process is hiring and offer of employment. You should never take it for granted that candidate is going to accept your application. However, if the candidate has patiently completed the paperwork or waited through the selection process. The odds of a qccepting the offer letter are high. Check the references and make the employment job offer after hiring.
<br/><br/>
<b>Onboarding:</b>
Every new hiring feels a little awkward at first. But it can be a “win-win” situation for you to win some extra points by helping new employees settle in easily. Instead of just showing them around the office and giving essentials supplies, also make them feel welcome by making special arrangements for lunch. Some mindful games and talk about non-work stuff will also be a plus point.
      
      </p>

    <Footer />
  </>
  );

}


export default Consulting;
