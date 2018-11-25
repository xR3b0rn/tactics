# Tactics

Tactics is a JavaScript turn-based strategy board game using HTML5 and WebGL.  It has full touch support and can be added to the home screen of your mobile device for a near native app experience.

This project is derivative of the flash-based Tactics Arena Online (TAO) game that has since been shut down.  It makes use of image and audio files from that game to expedite development.  All attempts to contact the rights-holder of these resources have been unsuccessful, so a legal right to use them should not be assumed.

## Requirements
* Node.js

To install under windows, you also need Git Bash and configure npm to use the Git Bash executable.
Example:
```bash
npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"
```

## Development
To get a local instance of the game up-and-running, follow the setups outlined below.

Create the env/* files from the examples.

```bash
cp env/server.example.json env/server.json
cp env/common.example.json env/common.json
```

Create a MySQL database, then update the details inside the env/server.json file.

Finally run the following.

```bash
make install
make dev -j2
```

Open up [http://localhost:3000](http://localhost:3000) in your browser to see the game running.

Any time you make changes to the server or assets code, the changes will be compiled and you can reload your browser to see them.

## Contributing
Pull requests are encouraged. For major changes, please open an issue first to discuss what you would like to change.

If you are familiar with Tactics Arena Online and/or would like to assist in porting the animations of other units from that game to this one, please contact us.

## Distribution

The `dist` directory contains JavaScript bundles that can be used to publish the game to a website.  In additional to these, the jQuery library is required.  The HTML files in the `static` directory can serve as an example of how to publish the game to a website.

After making changes to the source, the distribution bundles can be rebuilt using this command:

```bash
$ npm run dist
```

Be aware that no license currently exists for distributing this game as-is for public use since rights have not been acquired for the image and audio files used by it.  You may, however, make use of such resources when contributing additional work to this repository.  You may also create your own image and audio files and integrate them with this source code and publish the work for public use.

## License
All contents under the `src` directory fall under the following license:
[Unlicense](https://choosealicense.com/licenses/unlicense/)

All contents under the `lib` directory are licensed according to their respective licenses.

All image and audio files that are loaded from the http://www.taorankings.com domain are not licensed ([No License](https://choosealicense.com/no-permission/)).
