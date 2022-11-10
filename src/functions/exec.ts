import { exec } from "child_process"

/* functions */
const execCommand = (command: string, callback: any) => {
    exec(command, (err, out, stderr) => {
        if (err) {
            return callback(err)
        }


        if (stderr) {
            callback(stderr)
        }
        if (!err && !stderr) {

            callback()
        }
    })

}


export default execCommand 