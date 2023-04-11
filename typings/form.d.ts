
type submit = object 
interface submitForm extends submit {
  detail:{
    value?:Object
    errMsg?:String
    visible?:boolean
  }
}