var passLib = {

  genPass : function(salt,serviceName,passWord,length){
    var hash = CryptoJS.SHA3(salt + serviceName + passWord );
      console.log("GenPass called with: "+ salt + " , " +  serviceName + " , " +  passWord + " , " + length);
    var password = hash.toString(CryptoJS.enc.Base64).substring(1,length);
    console.log("password before replacing: " + password);
    return password.replace(new RegExp( "[=*+\/]", "g" ),'x');
  }
}