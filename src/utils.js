import {unlink} from 'fs/promises'
async function removeFile(path){
    try {
       await unlink(path)
    }catch (error) {
        console.log('ERROR removeFile', error.message)
    }
}

export {removeFile}