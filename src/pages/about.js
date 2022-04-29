import React, { useState, useEffect } from 'react'
import '../components/styles.css'
import grapesjs from "grapesjs";
import gjsPresetWebPage from "grapesjs-preset-newsletter";
import "grapesjs/dist/css/grapes.min.css";

const AboutPage = () => {
    // const [editor, setEditor] = useState(null);
    useEffect(() => {
      const editor = grapesjs.init({
        container: "#MyEditor",
  
        plugins: [gjsPresetWebPage],
        pluginsOpts: {
          gjsPresetWebPage: {},
  
          blockManager: {
            // options
          },
          commands: {
            // options
          }
        }
      });
      //const rte=CKEDITOR
      const blockManager = editor.BlockManager;
      const commands = editor.Commands;
      commands.add("myCommand", {
        run(editor, sender) {
          alert("Hello world!");
        },
        stop(editor, sender) {}
      });
      blockManager.add("h1-block", {
        label: "Heading",
        content: "<h1 >Put your title here</h1>",
        category: "Basic",
        attributes: {
          title: "Attributes Test"
        }
      });
    });

    return (
        <div className="App">
          <div id="MyEditor"></div>
        </div>
      );
}

export default AboutPage