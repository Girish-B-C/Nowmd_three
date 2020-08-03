function add_patient()
{
  TestedApps.NowMDdemo.Run(1, true);
    //Enters KeywordTests.New_Login.Variables.Var1("user") in the 'edLoginName' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edLoginName.Keys("User");
    //Enters KeywordTestbtnLogins.New_Login.Variables.Var1(123) in the 'edPassword' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edPassword.Keys(123);
    //Click on login button
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.btnLogin.Click();
    //click on patients link
    Aliases.NowMDdemo.formMain.panelNavagation.NavPanel.Click();
    //clicks new patient link
    Aliases.NowMDdemo.formSubCenter.sbNew.Click();
    //fill all the patient details
    Aliases.NowMDdemo.formPatientEntry.panelFields.PageControl.tsAddress.panelName.gbName.edFirstName.Keys("gurus")
    //click save
    Aliases.NowMDdemo.formPatientEntry.panelButtons.btnSave.Click();
    
    
    
}