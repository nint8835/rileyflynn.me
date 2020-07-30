import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import type { editor } from "monaco-editor/esm/vs/editor/editor.api"
// @ts-ignore
import monacoEditorStyles from "./styles/monaco_editor.module.css";

type PageProps = {};

const MonacoEditor: FunctionComponent<PageProps> = ({ children }) => {
  const [
    monacoEditor,
    setMonacoEditor,
  ] = useState<editor.IStandaloneCodeEditor | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let createdEditor: editor.IStandaloneCodeEditor | undefined;
    (async () => {
      if (editorRef.current === null) {
        return;
      }
      const monaco = await import("monaco-editor");
      createdEditor = monaco.editor.create(editorRef.current, {
        theme: "vs-dark",
        automaticLayout: true,
      })
      setMonacoEditor(
        createdEditor
      );
    })();
    return () => {
        if (createdEditor !== undefined) {
            createdEditor.dispose();
        }
    }
  }, [editorRef]);


  return <div ref={editorRef} className={monacoEditorStyles.monacoEditor} />;
};

export default MonacoEditor;
