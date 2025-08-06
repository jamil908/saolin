import './App.css'
import DepositSection from './Dashboard/deposit/DepositSection'
import JobTask from './Dashboard/jobTask/JobTask'
import MyJobList from './Dashboard/myJob/MyJobList'
import WithDrawForm from './Dashboard/withdraw/WithdrawForm'
import Home from './Home'
import AddFunds from './pages/addFunds/AddFunds'
import FAQSection from './pages/faqSection/FaqSection'
import WhyChooseUs from './pages/whychoseus/WhyChooseUs'
import Footer from './shared_file/footer'
function App() {

  return (
    <>
    <Home></Home>
    <JobTask></JobTask>
    <MyJobList></MyJobList>
   <WithDrawForm></WithDrawForm>
    <DepositSection></DepositSection>
    <AddFunds></AddFunds>
    <FAQSection></FAQSection>
    <WhyChooseUs></WhyChooseUs>
    
    <Footer></Footer>
     
    </>
  )
}

export default App
