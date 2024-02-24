const main= require('./main');
const [,, command , ...params] = process.argv;


switch(command){
    case 'write':
      main.writeToFile(params[0]);
    break;

    case 'read':
     main.readFromFile(params[0]);
    break;

    case 'cow':
    main.cowSay(params[0]);
    break;

    case 'delete':
        main.deleteFile(params[0]);


    break;

    default :
    console.log('Invalid command  ');
    break;

}