﻿function New_Login()
{
 // Project.Variables.Var1.Reset();
  //for(; !Project.Variables.Var1.IsEOF();)
  //{
    //Runs the "NowMDdemo" tested application.
    TestedApps.NowMDdemo.Run(1, true);
    //Enters KeywordTests.New_Login.Variables.Var1("user") in the 'edLoginName' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edLoginName.Keys(Project.Variables.Var1.Value("user"));
    //Enters KeywordTestbtnLogins.New_Login.Variables.Var1(123) in the 'edPassword' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edPassword.Keys(Project.Variables.Var1.Value(123));
    //object check
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.Object_DB_B.Click();
    //Clicks the 'btnLogin' object.
    //Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.btnLogin.Click(67, 6);
    //Closes the 'formMain' window.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.Exit_btn.Click();
   // Project.Variables.Var1.Next();
 // }
}