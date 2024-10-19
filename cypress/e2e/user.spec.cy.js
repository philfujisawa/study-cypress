import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myinfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkdashboardPage()
    menuPage.accessPerfomance()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails("Philippe", "Fujisawa", "Santos")
    myInfoPage.fillEmployeeDetails("33112", "7587", "123456", "2025-12-25")
    myInfoPage.saveForm("1987-07-05")
        
  })

})