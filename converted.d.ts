declare module 'froala-editor' {

    /**
     * Define a custom icon.
     *
     * @param name Label given to this icon to be used in registering commands etc...
     * @param parameters The parameters required to inject the icon into the template library's html template
     */
    export function DefineIcon(name: string, parameters: Partial<DefineIconParameters>): void;
  
    export interface DefineIconParameters {
      /**
       * Template to be used to resolve the icon. Default is font_awesome.
       * The values passed from DefineIconParameters will be injected into this templates html via parameter expansion.
       */
      template: string;
  
      /**
       * Default parameters available. Refer to ICON_TEMPLATES for more info.
       */
      NAME: string;
      SRC: string;
      ALT: string;
      FA5NAME: string;
      SVG_KEY: string;
    }
  
    /**
     * Set the default icon template.
  
     * By default the editor is using the font_awesome template but that can be changed.
     */
    export const ICON_DEFAULT_TEMPLATE: string;
  
    /**
     * Default icon templates.
     * When the editor renders an icon it is using one of the templates defined. By default the editor comes
     * with 3 templates: FontAwesome font, text and image.
     *
     *  FroalaEditor.ICON_TEMPLATES = {
     *     font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>,',
     *     font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',
     *     font_awesome_5s: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',
     *     text: '<span style="text-align: center;">[NAME]</span>',
     *     image: '<img src=[SRC] alt=[ALT] />',
     *     svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>'
     *   }
     */
    export const ICON_TEMPLATES: GenericObject<string>;
  
    /**
     * Registers a button
     *
     * Once a command is defined it can be included in any option that is using buttons:
     * - imageAltButtons
     * - imageEditButtons
     * - imageInsertButtons
     * - imageSizeButtons
     * - linkEditButtons
     * - linkInsertButtons
     * - tableColorsButtons
     * - tableEditButtons
     * - tableInsertButtons
     * - toolbarButtons
     * - toolbarButtonsMD
     * - toolbarButtonsSM
     * - toolbarButtonsXS
     * - videoEditButtons
     * - videoInsertButtons or videoSizeButtons
     *
     * @param name Label given to the commang to be used in registering in button options
     * @param parameters
     */
    export function RegisterCommand(name: string, parameters: Partial<RegisterCommandParameters>): void;
  
  
    export interface RegisterCommandParameters {
      // Button title.
      title: string;
  
      // Specify the icon for the button.
      // If this option is not specified, the button name will be used.
      icon: string;
  
      // Save the button action into undo stack.
      undo: boolean;
  
      // Focus inside the editor before the callback.
      focus: boolean;
  
      // Show the button on mobile or not.
      showOnMobile: boolean;
  
      // Refresh the buttons state after the callback.
      refreshAfterCallback: boolean;
  
      // Called when the button is hit.
      // The current context is the editor instance.
      callback: (buttonName: string) => void;
  
      // Called when the button state might have changed.
      refresh: (button: JQuery) => void;
    }
  
    /**
     *
     * @param keyCode Key code of the key pressed
     * @param command Command that should be triggered
     * @param commandValue Value passed to the command
     * @param shortcutLetter The letter to be shown in the tooltip for shortcut
     * @param shiftKeyRequired Shortcut needs to have the SHIFT key pressed
     * @param optionKeyRequired Shortcut needs to have the OPTION key pressed
     */
    export function RegisterShortcut(
      keyCode: number,
      command: string,
      commandValue: any,
      shortcutLetter?: string,
      shiftKeyRequired?: boolean,
      optionKeyRequired?: boolean
    ): void;
  
    /**
     * Register a placeholder for injecting templates into the editor's html
     * @param name Name of Template
     * @param template HTML to inject
     */
    export function RegisterTemplate(
      name: string,
      template: string
    ): void
  
    // Froala config defaults
    export const DEFAULTS: Partial<FroalaOptions>;
  
    export interface CustomPlugin {
      _init(): void;
    }
  
    // Froala Plugins
    export const PLUGINS: GenericObject<(editor: FroalaEditor) => CustomPlugin>;
  
    export function RegisterQuickInsertButton(name: string, parameters: object): void;
    export function DefineIconTemplate(name: string, template: string): void;
  
    export class FroalaEditor {
      constructor(element: any, options: Partial<FroalaOptions>);
      $oel: JQuery;
      destroy(): object;
  
      opts: FroalaOptions;
      align: Align;
      button: Button;
      charCounter: ChartCounter;
      clean: Clean;
      codeView: CodeView;
      colors: Colors;
      commands: Commands;
      core: Core;
      cursor: Cursor;
      edit: Edit;
      editInPopup: EditInPopup;
      embedly: Embedly;
      emoticons: Emoticons;
      events: Events;
      file: File;
      fontFamily: FontFamily;
      fontSize: FontSize;
      format: Format;
      forms: Forms;
      fullscreen: Fullscreen;
      helpers: Helpers;
      html: HTML;
      image: Image;
      inlineClass: InlineClass;
      inlineStyle: InlineStyle;
      keys: Keys;
      language: Language;
      lineHeight: LineHeight;
      link: Link;
      lists: Lists;
      markers: Markers;
      modals: Modals;
      node: Node;
      paragraphFormat: Apply<string>;
      paragraphStyle: Apply<string>;
      placeholder: Placeholder;
      popups: Popups;
      position: Position;
      quote: Apply<string>;
      save: Save;
      selection: FroalaSelection;
      size: Size;
      snapshot: Snapshot;
      spellChecker: SpellChecker;
      table: Table;
      toolbar: Toolbar;
      tooltip: Tooltip;
      undo: Undo;
      video: Video;
      window:Window;
      filesManager:FilesManager;
      videoEvent:VideoEvent;
      url:URL;
      toolbarEvent:ToolbarEvent;
      tableEvent:TableEvent;
      positionEvent:PositionEvent;
      popupsEvent:PopupsEvent;
      paste:Paste;
      linkEvent:LinkEvent;
      saveEvent:SaveEvent;
      snapshotEvent:SnapshotEvent;
      imageManager:ImageManager;
      imageEvent:ImageEvent;
      methodHTML:MethodHTML;
      fileEvent:FileEvent;
      embedlyEvent:EmbedlyEvent;
      editEvent:EditEvent;
      codeviewEvent:CodeViewEvent;
      commandsEvent:CommandsEvent;
      element:Element;
      
    }
  
    export type GenericObject<T = any> = { [key: string]: T; };
  
    export interface ToolbarButtons {
      [key: string]: {
        buttons: string[];
        align?: string;
        buttonsVisible?: number;
      };
    }
  
    export interface EmoticonButton {
      code: string;
      desc: string;
    }
  
    export type UploadMethod = 'POST' | 'PUT';
    export type DeleteMethod = 'POST' | 'DELETE';
    export type GetMethod = 'POST' | 'GET';
  
    export interface SpecialCharacterSet {
      title: string;
      list: {
        char: string;
        desc: string;
      }[];
    }
  
    export interface FroalaOptions {
      // apiKey
      apiKey: string[],

      // app
      app: string[],

      //codoxOptions
      codoxOptions: object,

      //docId
      docId: string,

      //filesManagerAllowedTypes
      filesManagerAllowedTypes: string[],
      
      //filesManagerMaxSize
      filesManagerMaxSize: number,

      //filesManagerUploadParams
      filesManagerUploadParams: object[],

      //filesManagerUploadToS3
      filesManagerUploadToS3: object,

      //filesManagerUploadURL
      filesManagerUploadURL: string[]


      //username
      username: string[],

     // Aviary Editor
     aviaryKey: boolean,
     aviaryOptions: { [key: string]: any },
 
     // Char Counter
     charCounterCount: boolean,
     charCounterMax: number,
 
     // Code Beautifier
     codeBeautifierOptions: Object, //GenericObject
 
     // Code View
     codeMirror: object,
     codeMirrorOptions: object, //GenericObject
     codeViewKeepActiveButtons: string[],
 
     // Colors
     colorsBackground: string[],
     colorsButtons: string[],
     colorsHEXInput: boolean,
     colorsStep: number,
     colorsText: string[],
 
     // Draggable
     dragInline: boolean,
 
     // Events
     events: object, //Partial<FroalaEvents>
 
     // Embedly
     embedlyEditButtons: string[],
     embedlyInsertButtons: string[],
     embedlyKey: string,
     embedlyScriptPath: string,
 
     // Emoticons
     emoticonsButtons: string[],
     emoticonsSet: String[], //EmoticonButton[]
     emoticonsStep: number,
     emoticonsUseImage: boolean,
 
     // Entities
     entities: string,
 
     // File
     fileAllowedTypes: string[],
     fileInsertButtons: string[],
     fileMaxSize: number,
     fileUpload: boolean,
     fileUploadMethod: string[], //UploadMethod
     fileUploadParam: string[],
     fileUploadParams: object,
     fileUploadToS3: object,
     fileUploadURL: string[],
     fileUseSelectedText: boolean,
 
     // Font Family
     fontFamily: object, //GenericObject
     fontFamilyDefaultSelection: string,
     fontFamilySelection: boolean,
 
     // Font Size
     fontSize: string[],
     fontSizeDefaultSelection: string[],
     fontSizeSelection: boolean,
     fontSizeUnit: string[],
 
     // Form
     formEditButtons: string[],
     formMultipleStyles: boolean,
     formStyles: object, //GenericObject
     formUpdateButtons: string[],
 
     // Licensing
     key: string[],
 
     // General
     attribution: boolean,
     autoStart: boolean,
     autofocus: boolean,
     direction: string, //'auto' | 'ltr' | 'rtl'
     disableRightClick: boolean,
     documentReady: boolean,
     editInPopup: boolean,
     editorClass: string[],
     enter: string[],
     fullPage: boolean,
     height: number,
     heightMax: number,
     heightMin: number,
     htmlAllowComments: boolean,
     htmlAllowedAttrs: string[],
     htmlAllowedEmptyTags: string[],
     htmlAllowedStyleProps: string[],
     htmlAllowedTags: string[],
     htmlDoNotWrapTags: string[],
     htmlExecuteScripts: boolean,
     htmlIgnoreCSSProperties: string[],
     htmlRemoveTags: string[],
     htmlSimpleAmpersand: boolean,
     htmlUntouched: boolean,
     iconsTemplate: string[],
     iframe: boolean,
     iframeDefaultStyle: string[],
     iframeStyle: string[],
     iframeStyleFiles: string[],
     indentMargin: number,
     initOnClick: boolean,
     keepFormatOnDelete: boolean,
     multiLine: boolean,
     pasteAllowLocalImages: boolean,
     pasteAllowedStyleProps: string[],
     pasteDeniedAttrs: string[],
     pasteDeniedTags: string[],
     pastePlain: boolean,
     placeholderText: string[],
     pluginsEnabled: string[],
     requestHeaders: object, //GenericObject<string>
     requestWithCORS: boolean,
     requestWithCredentials: boolean,
     scrollableContainer: string[],
     shortcutsEnabled: string[],
     shortcutsHint: boolean,
     spellcheck: boolean,
     tabIndex: number,
     tabSpaces: number,
     theme: string[],
     toolbarBottom: boolean,
     toolbarButtons: object,
     toolbarButtonsMD: object,//string[] //Partial<ToolbarButtons>
     toolbarButtonsSM: object,//string[] //Partial<ToolbarButtons>
     toolbarButtonsXS: object,//string[] //Partial<ToolbarButtons>
     toolbarContainer: boolean, //string
     toolbarInline: boolean,
     toolbarSticky: boolean,
     toolbarStickyOffset: number,
     toolbarVisibleWithoutSelection: boolean,
     tooltips: boolean,
     typingTimer: number,
     useClasses: boolean,
     width: string[],
     zIndex: number,
 
     // Help
     helpSets: object,
 
     // Image
     imageAddNewLine: boolean,
     imageAllowedTypes: string[],
     imageAltButtons: string[],
     imageCORSProxy: string[],
     imageDefaultAlign: string[], //MediaAlign
     imageDefaultDisplay: string[], //DisplayType
     imageDefaultMargin: number,
     imageDefaultWidth: number,
     imageEditButtons: string[],
     imageInsertButtons: string[],
     imageMaxSize: number,
     imageMinWidth: number,
     imageMove: boolean,
     imageMultipleStyles: boolean,
     imageOutputSize: boolean,
     imagePaste: boolean,
     imagePasteProcess: boolean,
     imageResize: boolean,
     imageResizeWithPercent: boolean,
     imageRoundPercent: boolean,
     imageSizeButtons: string[],
     imageSplitHTML: boolean,
     imageStyles: object, //GenericObject<string>
     imageTUIOptions: object,
     imageTextNear: boolean,
     imageUpload: boolean,
     imageUploadMethod: string[], //UploadMethod
     imageUploadParam: string[],
     imageUploadParams: object,
     imageUploadRemoteUrls: boolean,
     imageUploadToS3: object,
     imageUploadURL: string[],
 
     // Image Manager
     imageManagerDeleteMethod: string[], //DeleteMethod
     imageManagerDeleteParams: object,
     imageManagerDeleteURL: string[],
     imageManagerLoadMethod: string[], //GetMethod
     imageManagerLoadParams: object,
     imageManagerLoadURL: string[],
     imageManagerPageSize: number,
     imageManagerPreloader: string[],
     imageManagerScrollOffset: number,
     imageManagerToggleTags: boolean,
 
     // Inline Style
     inlineStyles: object, //GenericObject<string>
 
     // Inline Class
     inlineClasses: object, //GenericObject<string>
 
     // Language
     language: string[],
 
     // Line Breaker
     lineBreakerHorizontalOffset: number,
     lineBreakerOffset: number,
     lineBreakerTags: string[],
 
     // Link
     linkAlwaysBlank: boolean,
     linkAlwaysNoFollow: boolean,
     linkAttributes: object, //GenericObject
     linkAutoPrefix: string,
     linkConvertEmailAddress: boolean,
     linkEditButtons: string[],
     linkInsertButtons: string[],
     linkList: string[], //GenericObject<string>[]
     linkMultipleStyles: boolean,
     linkNoOpener: boolean,
     linkNoReferrer: boolean,
     linkStyles: object, //GenericObject<string>
     linkText: boolean,
 
     // Paragraph Format
     lineHeights: object, //GenericObject<string>
     paragraphDefaultSelection: string[],
     paragraphFormat: object, //GenericObject<string>
     paragraphFormatSelection: boolean,
     paragraphMultipleStyles: boolean,
     paragraphStyles: object, //GenericObject<string>
 
     // Lists
     listAdvancedTypes: boolean,
 
     // Quick Insert
     quickInsertButtons: string[],
     quickInsertEnabled: boolean,
     quickInsertTags: string[],
 
     // Font Awesome
     faButtons: string[],
     fontAwesomeSets: object,
     fontAwesomeTemplate: string[],
 
     // Special Characters
     specialCharButtons: string[],
     specialCharactersSets: object, //SpecialCharacterSet[]
 
     // SCAYT Spell Checker
     scaytAutoload: boolean,
     scaytCustomerId: string,
     scaytOptions: object,
 
     // Save
     saveInterval: number,
     saveMethod: string[], //UploadMethod
     saveParam: string[],
     saveParams: object,
     saveURL: string[],
 
     // Table
     tableCellMultipleStyles: boolean,
     tableCellStyles: object, //GenericObject<string>
     tableColors: string[],
     tableColorsButtons: string[],
     tableColorsStep: number,
     tableDefaultWidth: string[],
     tableEditButtons: string[],
     tableInsertButtons: string[],
     tableInsertHelper: boolean,
     tableInsertHelperOffset: number,
     tableInsertMaxSize: number,
     tableMultipleStyles: boolean,
     tableResizer: boolean,
     tableResizerOffset: number,
     tableResizingLimit: number,
     tableStyles: object, //GenericObject<string>
 
     // Video
     videoAllowedProviders: string[],
     videoAllowedTypes: string[],
     videoDefaultAlign: string[], //MediaAlign
     videoDefaultDisplay: string[], //DisplayType
     videoDefaultWidth: number,
     videoEditButtons: string[],
     videoInsertButtons: string[],
     videoMaxSize: number,
     videoMove: boolean,
     videoResize: boolean,
     videoResponsive: boolean,
     videoSizeButtons: string[], //boolean
     videoSplitHTML: boolean,
     videoTextNear: boolean,
     videoUpload: boolean,
     videoUploadMethod: string[], //UploadMethod
     videoUploadParam: string[],
     videoUploadParams: object,
     videoUploadToS3: object, //boolean
     videoUploadURL: string[],
 
     // Word
     wordAllowedStyleProps: string[],
     wordDeniedAttrs: string[],
     wordDeniedTags: string[],
     wordPasteKeepFormatting: boolean,
     wordPasteModal: boolean,
}
  
    export interface FroalaEvents {
      blur: () => void,
      click: (clickEvent: any) => void,
      contentChanged: () => void,
      destroy: () => void,
      drop: (dropEvent: JQueryEventObject) => void,
      focus: () => void,
      initialized: () => void,
      initializationDelayed: () => void,
      input: (inputEvent: JQueryInputEventObject) => void,
      keydown: (keydownEvent: JQueryKeyEventObject) => void,
      keypress: (keypressEvent: JQueryKeyEventObject) => void,
      keyup: (keyupEvent: JQueryKeyEventObject) => void,
      mousedown: (mousedownEvent: JQueryMouseEventObject) => void,
      mouseup: (mouseupEvent: JQueryMouseEventObject) => void,
      shortcut: (event: Event, commandName: string, shortcutValue: any) => void,
      touchstart: (touchstartEvent: JQueryEventObject) => void,
      touchend: (touchendEvent: JQueryEventObject) => void,
      
  
     
  
  
     
  
  
      
    }
  

export interface JQuery { }
export interface JQueryEventObject { }
export interface JQueryInputEventObject { }
export interface JQueryKeyEventObject { }
export interface JQueryMouseEventObject { }
  
  
    export interface VideoEvent
    {
      codeError:(code:string)=>void;
      inserted:($video:JQuery)=>void;
      replaced:($video:JQuery)=>void;
      linkError:(link:string)=>void;
      removed:($video:JQuery)=>void;
      loaded:($video:JQuery)=>void;
      uploaded:(response:any)=>void;
      uploadedToS3:(link:string,key:string,response:object)=>void;
      beforeUpload:($video:JQuery)=>void;
      beforeRemove:($video:JQuery)=>void;
  
  
      hideResizer:()=>void;
  
    }
  
  
    export interface URL{
      linked:(link:string)=>void;
    }
  
    export interface Window{
      copy: () => void,
      cut: ()=>void,
    }
  
  
  export interface ToolbarEvent{
      esc:()=>void;
  
  
  
      focusEditor:()=>void;
      hide:()=>void;
      show:()=>void;
  
  }
  
  
  export interface TableEvent{
      inserted:(table:Element)=>void;
      resized:(table:Element)=>void;
  
  }
  
  export interface SnapshotEvent{
      after:()=>void;
      before:()=>void;
  }
  
  export interface SaveEvent{
      after:(data:any)=>void;
      before:(html:string)=>void;
      error:(error:string,response:any)=>void;
  }
  
  
  
  
  
  export interface PositionEvent{
      refresh:()=>void;
  }
  
  
  
  export interface PopupsEvent{
      hide:(id:string)=>void;
      show:(id:string)=>void;
  }
  
  
  export interface Paste{
      after:()=>void;
      afterCleanUp:(clipboard_html:string)=>void;
      before:(original_event:JQuery)=>void;
      beforeCleanUP:(clipboard_html:string)=>void;
      wordPaste:(clipboard_html:string)=>void;
  }
  
  
  export interface LinkEvent{
      bad:(original_href:string)=>void;
      beforeInsert:(link:string,text:string,attrs:object)=>void;
      beforeRemove:(link:string,text:string,attrs:object)=>void;
  }
  
  
  export interface FilesManager{
      beforeUpload:(files:any[])=>void;
      error:(error:string,response:object)=>void;
      uploaded:(response:any)=>void;
      uploadedToS3:(link:string,key:string,response:object)=>void;
  }
  
  
  export interface ImageManager{
    //Triggered before deleting an image from the image manager.
    beforeDeleteImage:(img: object) => void;
    //Triggered by an error occurred while trying to load images inside the image manager.
    error:(error: object, response: any) => void;
    //Triggered after the image was deleted from image manager.
    imageDeleted:(data: object) => void;
    //Triggered after an image was loaded in image manager.
    imageLoaded:(img: object) => void;
    //Triggered after the request to load images in the media manager has been completed successfully.
    imagesLoaded:(data: void) => void;
  }


  export interface Image{
    //Triggered before uploading a pasted image from clipboard to the server.
    beforePasteUpload:(img: Image) => void;
    //Triggered after user confirms to remove the image from the Froala Rich Text Editor, but before actually removing it.
    beforeRemove:(img : any) => void;
    //Triggered before uploading an image to the server.
    beforeUpload:(images:any) => void;
    //Triggered before uploading an image to the server.
    hideResizer:(images: any) => void ;
    //Triggered by an error occurred while trying to load the image.
    error:(error: object, response: any) => void;
    //Triggered after image was inserted in the Froala Rich Text Editor.
    inserted: (img: object,response: any) => void;
    //Triggered when an image has finished to load successfully.
    loaded: (img: object) => void;
    //Triggered after image is removed from the Froala Rich Text Editor.
    removed:(img: object) => void;
    //Triggered after image was replaced with a new one.
    replaced:(img: object,response: any) => void;
    //Triggered while doing image resize.
    resize:(img: object) => void;
    //Triggered when image resize has finished.
    resizeEnd:(img: object) => void;
    //Triggered after the image was uploaded.
    uploaded:(response: any) => void;
    //Triggered after image was uploaded to S3.
    uploadedToS3:(link:URL, key: any, response:any) => void;
  }


  export interface MethodHTML{
    //Triggered after the HTML was served to the html.get method.
    afterGet:() => void;
    //Triggered before the HTML was served to the html.get method.
    beforeGet:() => void;
    //Triggered before the HTML is getting cleaned.
    processGet:(el:Element) => void;
    //Triggered when the HTML of the editor is saved or synced.
    get:(html:string) => void;
    //Triggered after the HTML was set into the editor.
    set:() => void;
  }


  export interface FileEvent{
    //Triggered before uploading a file to the server.
    beforeUpload:(files:string) => void;
    //Triggered after error is occured in uploading a file to the server.
    error:(error: object,response: object) => void;
    //Triggered after the request to upload a file has been completed successfully.
    inserted:(file: object,response: void) => void;
    //Triggered after removing a file link.
    unlink:(link: Object) => void;
    //Triggered after the file was uploaded.
    uploaded:(response: void) => void;
    //Triggered after the file was uploaded to S3.
    uploadedToS3:(link: void,key: void,response: void) => void;
  }


  export interface EmbedlyEvent{
    //Triggered before the embedly embeded is removed from editor.
    beforeRemove:(embeded:object) => void;
  }


  export interface Element{
    //Triggered after the any element is dropped in editor.
    dropped:(element:object) => void;
  }


  export interface EditEvent{
    //Triggered after the editor is enabled for editing.
    on:() => void;
    //Triggered after the editor is disabled for editing.
    off:() => object;     
  }


  export interface CommandsEvent{
    //generic event that is triggered after every command executed in the editor.
    after:(cmd: void, param1: void, param2: void) => void;
    //generic event that is triggered before every command executed in the editor.
    before:(cmd: void, param1: void, param2: void) => void;
    //generic event that is triggered after every command clicked in the editor.
    mousedown:(button:void) => void;
    //This event is a generic event that is triggered after command redo.
    redo:() => void
    //This event is a generic event that is triggered after command undo.
    undo:() => void
  }

  export interface CodeViewEvent{
    //Triggered when the code view is changed.
    update:() => void;
  }


  export interface CharCounter{
    exceeded:() => void;
    //Triggered when the maxCharNumber was exceeded.
    update:() => void;
    //Triggered when the charCounter should update.
    }


    export interface Buttons {
      //Triggered when the buttons should be refreshed.
      refresh:() => void,
    }
  
    interface Apply<T> {
      apply(value: T): void;
    }
  
    export type MediaAlign = 'left' | 'right' | 'center';
    export type AlignType = 'left' | 'right' | 'center' | 'justify';
  
    export interface Align {
      // Set the alignment of the selected paragraphs.
      apply(alignType: AlignType): object;
      // Refresh the alignment of the selected paragraphs.
      refresh(button: Element): object;
    }
  
    export interface Button {
      // Adds buttons into existing toolbar.
      addButton(buttons: Commands[]): object;
      // Refreshes the state of the buttons in the toolbar.
      bulkRefresh(): void;
      // Builds a list of commands to a button list represented as a HTML string.
      buildList(buttons: Commands[]): object;
      // Builds a list of commands to a button list represented as a HTML string.
      bulkGroup(): void;
      // Attaches the event callbacks.
      bindCommands(element: Element): void;
      // Refreshes the state of active command/button.
      refresh(button: Element): void;
      // Hides all the active dropdowns.
      hideActiveDropdowns(element: Element): void;
    }
  
    export interface ChartCounter {
      // Returns the number of characters in the editor.
      count(): number;
    }
  
    export interface Clean {
      // Cleans dirty HTML to clean HTML ready to be inserted into the editor.
      html(dirtyHtml: string): string;
      // Cleans the tables.
      tables(): void
      // Cleans the lists.
      lists(): void;
      // Cleans the invisible spaces.
      invisibleSpaces(dirtyHtml: string): void;
    }
  
    export interface CodeView {
      // Find if code view mode is active.
      isActive(): boolean;
      // Get the HTML edited inside the code view mode.
      get(): string;
      // Toggle between the code and text view.
      toggle(): object;
    }
  
    export interface Colors {
      // Set the background color of the selected text.
      background(color: string): object;
      // Set the text color of the selected text.
      text(value: string): object;
      // Hides the color picker popup.
      back(): void;
    }
  
    export interface Commands {
      // Format the selected text as bold.
      bold(): object;
      // Clean any formatting on the selected text.
      clearFormatting(): object;
      // Indent more the selected paragraphs.
      indent(): object;
      // Insert a horizontal line at the cursor position.
      insertHR(): object;
      // Format the selected text as italic.
      italic(): object;
      // Indent less the selected paragraphs.
      outdent(): object;
      // Executes the redo action.
      redo(): object;
      // Show the inline toolbar at the cursor position.
      show(): object;
      // Format the selected text as strike through.
      strikeThrough(): object;
      // Format the selected text as subscript.
      subscript(): object;
      // Format the selected text as superscript.
      superscript(): object;
      // Format the selected text as underline.
      underline(): object;
      // Executes the undo action.
      undo(): object;
      // Executes the selectAll action.
      selectAll(): object;
      // Show more text actions toolbar.
      moreText(): object;
      // Show more paragraph actions toolbar.
      moreParagraph(): object;
      // Show more rich text actions toolbar.
      moreRich(): object;
      // Show more miscellaneous actions toolbar.
      moreMisc(): object;
    }
  
    export interface Core {
      // Creates a XHR object with the specified parameters.
      getXHR(url: string, method: string): XMLHttpRequest;
      // CSS style to be injected inside the iframe of the editor when the iframe option is used.
      injectStyle(style: string): object;
      // Check if the editor is empty.
      isEmpty(): boolean;
      // Check if the both editor instances are same.
      sameInstance(object: Element): boolean;
    }
  
    export interface Cursor {
      // Trigger backspace action at the cursor position.
      backspace(): object;
      // Trigger enter action at the cursor position.
      enter(shiftPressed: boolean): object;
      // Trigger delete action at the cursor position.
      del(): object;
      // Find if the cursor is at the end.
      isAtEnd(): boolean;
      // Find if the cursor is at the start.
      isAtStart(): boolean;
    }
  
    export interface Edit {
      // Disable editor by removing the contenteditable attribute.
      off(): object;
      // Enable editor by adding the contenteditable attribute.
      on(): object;
      // Find if the edit is disabled.
      isDisabled(): boolean;
      // Disables the edit functionality.
      disableDesign(): void;
    }
  
    export interface EditInPopup {
      // Update the texts in popup.
      update(): void;
    }
  
    export interface Embedly {
      // Add the embedly to editor.
      add(url: string): void;
      // Hides the insert popup and shows inline menu for currently selected embedly.
      back(): void;
      // Gets the currently embedly instance.
      get(): void;
      // Inserts the embedly into editor from popup.
      insert(): void;
      // Removes the currently selected embedly instance.
      remove(): void;
      // Shows insert popup.
      showInsertPopup(): void;
    }
  
    export interface Emoticons {
      // Insert an emoticon at the cursor position.
      insert(emoticon: string, image?: string): object;
      // Insert an emoticon at the cursor position.
      setEmoticonCategory(categoryId: string): void;
    }
  
    export interface Events {
      // Check if blur events are active.
      blurActive(): boolean;
      // Binds the click event for given element.
      bindClick(element: Element, selector: string, handler: () => void): void;
      // Trigger events and chain the pass the returned value between the assigned events.
      chainTrigger(name: string, eventParams: object, force: boolean): object;
      // Disables the blur and focus events.
      disableBlur(): object;
      // Enables the blur and focus events.
      enableBlur(): object;
      // Focus into the editor.
      focus(): object;
      // Register an event.
      on(name: string, callback: (event: Event) => void | boolean, first: boolean): object;
      // Triggers an event.
      trigger(name: string, args: any[], force: boolean): object;
    }
  
    export interface File {
      // Insert the link to a file at the cursor position.
      insert(link: string, text: string, response: object): object;
      // Upload the passed file to the server.
      upload(files: any[]): object;
    }
  
    export interface FontFamily extends Apply<string> { }
  
    export interface FontSize extends Apply<string> { }
  
    export type FormatAttributes = { [key: string]: any; };
    export interface Format {
      // Apply format for the selection or at the insertion point.
      apply(tagName: string, attributes: FormatAttributes): object;
      // Apply style for the selection or at the insertion point.
      applyStyle(cssProperty: string, cssAttributes: string | FormatAttributes): object;
      // Check format for the selection or at the insertion point.
      is(tagName: string, attributes: FormatAttributes): boolean;
      // Remove format for the selection or at the insertion point.
      remove(tagName: string, attributes: FormatAttributes): object;
      // Remove style for the selection or at the insertion point.
      removeStyle(cssPropertyName: string): object;
      // Toggle format for the selection or at the insertion point.
      toggle(tagName: string, attributes: FormatAttributes): object;
    }
  
    export interface Fullscreen {
      // Check the fullscreen state.
      isActive(): boolean;
      // Toggle fullscreen mode.
      toggle(): object;
    }
  
    export interface Forms {
      applyStyle(className: string, formStyles: object, formMultipleStyles: boolean): void;
  
    }
  
    export interface Helpers {
      isMobile(): boolean;
      isAndroid(): boolean;
      isBlackberry(): boolean;
      isIOS(): boolean;
      isMac(): boolean;
      isTouch(): boolean;
      isWindowsPhone(): boolean;
      scrollLeft(): number;
      scrollTop(): number;
      sanitizeURL(url: string): string;
    }
  
    export interface HTML {
      cleanEmptyTags(): object;
      get(keepMarkers?: boolean, keepClasses?: boolean): string;
      getSelected(): string;
      unwrap(): void;
      wrap(temp?: boolean, tables?: boolean, blockquote?: boolean): void;
      insert(html: string, clean?: boolean, doSplit?: boolean): object;
      set(html: string): object;
    }
  
    export type DisplayType = 'block' | 'inline';
  
    export interface ImageEvent {
      align(alignType: AlignType): object;
      applyStyle(className: string): object;
      display(displayType: DisplayType): any ;
      get(): object;
      insert(link: string, sanitize: boolean, data: { [key: string]: any }, existingImage: any, response: object): object;
      remove(image: any): object;
      setAlt(alternateText: string): object;
      setSize(width: string, height: string): object;
      upload(images: any[]): object;
    }
  
    export interface ImageManager {
      hide(): object;
      show(): object;
    }
  
    export interface InlineClass extends Apply<string> { }
  
    export interface InlineStyle extends Apply<string> { }
  
    export interface Keys {
      ctrlKey(event: JQueryEventObject): boolean;
      isArrow(keyCode: number): boolean;
      isCharacter(keyCode: number): boolean;
    }
  
    export interface Language {
      translate(str: string): string;
    }
  
    export interface LineHeight extends Apply<number> { }
  
    export interface Link {
      allSelected(): Element[];
      applyStyle(className: string): object;
      get(): Element;
      insert(href: string, text?: string, attributes?: { [key: string]: any }): object
      remove(): object;
    }
  
    export type ListType = 'OL' | 'UL';
  
    export interface Lists {
      format(listType: ListType): object;
    }
  
    export interface Markers {
      insert(): object;
      insertAtPoint(event: JQueryEventObject): void;
      place(range: Range, marker?: boolean, id?: string): object;
      remove(): object;
      split(): object;
    }
  
    export interface Modals {
      areVisible(modalInstance: Element): boolean;
      create(id: string, headTemplate: string, bodyTemplate: string): Element;
      get(id: string): Element;
      isVisible(id: string): boolean;
      show(id: string): void;
      hide(id: string, restoreSelection: boolean): void;
    }
  
    export interface Node {
      blockParent(node: Element): Element;
      clearAttributes(node: Element): Element;
      contents(node: Element): any[];
      deepestParent(node: Element, until?: Element, simpleEnter?: boolean): Element;
      hasClass(element: Element, className: string): boolean;
      hasFocus(node: Element): boolean;
      isBlock(node: Element): boolean;
      isElement(node: Element): boolean;
      isDeletable(node: Element): boolean;
      isEditable(node: Element): boolean;
      isEmpty(node: Element, ignoreMarkers?: boolean): boolean;
      isFirstSibling(node: Element, ignoreMarkers?: boolean): boolean;
      isLastSibling(node: Element, ignoreMarkers?: boolean): boolean;
      isList(node: Element, ignoreMarkers?: boolean): boolean;
      isVoid(node: Element): boolean;
    }
  
    export interface ParagraphFormat extends Apply<string> { }
  
    export interface ParagraphStyle extends Apply<string> { }
  
    export interface Placeholder {
      hide(): void;
      isVisible(): void;
      refresh(): object;
      show(): void;
    }
  
    export interface Popups {
      // TODO: Documentation looks incorrect for this. Should be a boolean with arguments
      areVisible(): void;
      create(id: string, templateProperties: { [key: string]: any }): JQuery;
      get(id: string): JQuery;
      hide(id: string): boolean;
      hideAll(except?: string): object;
      isVisible(id: string): boolean;
      onHide(id: string, callback: () => void): object;
      onRefresh(id: string, callback: () => void): object;
      refresh(id: string): object;
      setContainer(id: string): void;
      show(id: string, leftOffset: number, topOffset: number, heigh: number): object;
    }
  
    export interface Position {
      getBoundingRect(): Element;
      refresh(): object;
    }
  
    export interface Quote extends Apply<string> {}
  
    export interface Save {
      force(): object;
      save(): object;
      reset(): object;
    }
  
    export interface FroalaSelection {
      blocks(): Element[];
      clear(): object;
      element(): HTMLElement;
      endElement(): Element;
      get(): Selection;
      inEditor(): boolean;
      info(element: Element): object;
      isCollapsed(): boolean;
      isFull(): boolean;
      ranges(index?: number): Range | Range[];
      restore(): object;
      save(): object;
      setAfter(node: Element): object;
      setAtEnd(node: Element): object;
      setAtStart(node: Element): object;
      setBefore(node: Element): object;
      text(): string;
    }
  
    export interface Size {
      refresh(): object;
      syncIframe(): object;
    }
  
    export interface Snapshot {
      equal(snapshot1: Snapshot, snapshot2: Snapshot): boolean;
      get(): Snapshot;
      restore(snapshot: Snapshot): object;
    }
  
    export interface SpellChecker {
      toggle(): void;
    }
  
    export interface Table {
      insert(rows: number, columns: number): object;
    }
  
    export interface Toolbar {
      enable(): object;
      disable(): object;
      hide(): object;
      show(): object;
      showInline(element?: Element, force?: boolean): object;
    }
  
    export interface Tooltip {
      bind(element: Element, selector: string, displayAbove?: boolean): object;
      hide(): object;
      to(element: Element, displayAbove?: boolean): object;
    }
  
    export interface Undo {
      canDo(): boolean;
      canRedo(): boolean;
      reset(): object;
      saveStep(): object;
    }
  
    export interface Video {
      align(alignType: AlignType): object;
      display(displayType: DisplayType): object;
      get(): JQuery;
      insert(embeddedCode: string): object;
      remove(): object;
      setSize(width: string, height: string): object;
    }
  }
  
  //METHODS:
  export type AlignType = 'left' | 'right' | 'center' | 'justify';
export interface JQuery { }
export interface JQueryEventObject {}
interface Apply<T> {
apply(value: T): void;
}
export interface Align {
  // Set the alignment of the selected paragraphs.
  apply(alignType: AlignType): object;
  // Refresh the alignment of the selected paragraphs.
  refresh(button: Element): object;
}

export interface Button {
  // Adds buttons into existing toolbar.
  addButtons(buttons: Commands[]): object;
  // Refreshes the state of the buttons in the toolbar.
  bulkRefresh(): void;
  // Builds a list of commands to a button list represented as a HTML string.
  buildList(buttons: Commands[]): object;
  // Builds a list of commands to a button list represented as a HTML string.
  buildGroup(): void;
  // Attaches the event callbacks.
  bindCommands(element: Element): void;
  // Refreshes the state of active command/button.
  refresh(button: Element): void;
  // Hides all the active dropdowns.
  hideActiveDropdowns(element: Element): void;
}

export interface CharCounter {
  // Returns the number of characters in the editor.
  count(): number;
}

export interface Clean {
  // Cleans dirty HTML to clean HTML ready to be inserted into the editor.
  html(dirtyHtml: string): string;
  // Cleans the tables.
  tables(): void
  // Cleans the lists.
  lists(): void;
  // Cleans the invisible spaces.
  invisibleSpaces(dirtyHtml: string): void;
}

export interface CodeView {
  // Find if code view mode is active.
  isActive(): boolean;
  // Get the HTML edited inside the code view mode.
  get(): string;
  // Toggle between the code and text view.
  toggle(): object;
}

export interface Colors {
  // Set the background color of the selected text.
  background(color: string): object;
  // Set the text color of the selected text.
  text(value: string): object;
  // Hides the color picker popup.
  back(): void;
}

export interface Commands {
  // Format the selected text as bold.
  bold(): object;
  // Clean any formatting on the selected text.
  clearFormatting(): object;
  // Indent more the selected paragraphs.
  indent(): object;
  // Insert a horizontal line at the cursor position.
  insertHR(): object;
  // Format the selected text as italic.
  italic(): object;
  // Indent less the selected paragraphs.
  outdent(): object;
  // Executes the redo action.
  redo(): object;
  // Show the inline toolbar at the cursor position.
  show(): object;
  // Format the selected text as strike through.
  strikeThrough(): object;
  // Format the selected text as subscript.
  subscript(): object;
  // Format the selected text as superscript.
  superscript(): object;
  //Show more track changes actions toolbar.
  moreTrackChanges():object;
  // Format the selected text as underline.
  underline(): object;
  // Executes the undo action.
  undo(): object;
  // Executes the selectAll action.
  selectAll(): object;
  // Show more text actions toolbar.
  moreText(): object;
  // Show more paragraph actions toolbar.
  moreParagraph(): object;
  // Show more rich text actions toolbar.
  moreRich(): object;
  // Show more miscellaneous actions toolbar.
  moreMisc(): object;
}

export interface Core {
  // Creates a XHR object with the specified parameters.
  getXHR(url: string, method: string): XMLHttpRequest;
  // CSS style to be injected inside the iframe of the editor when the iframe option is used.
  injectStyle(style: string): object;
  // Check if the editor is empty.
  isEmpty(): boolean;
  // Check if the both editor instances are same.
  sameInstance(object: Element): boolean;
}

export interface Cursor {
  // Trigger backspace action at the cursor position.
  backspace(): object;
  // Trigger enter action at the cursor position.
  enter(shiftPressed: boolean): object;
  // Trigger delete action at the cursor position.
  del(): object;
  // Find if the cursor is at the end.
  isAtEnd(): boolean;
  // Find if the cursor is at the start.
  isAtStart(): boolean;
}

export interface Edit {
  // Disable editor by removing the contenteditable attribute.
  off(): object;
  // Enable editor by adding the contenteditable attribute.
  on(): object;
  // Find if the edit is disabled.
  isDisabled(): boolean;
  // Disables the edit functionality.
  disableDesign(): void;
}

export interface EditInPopup {
  // Update the texts in popup.
  update(): void;
}

export interface Embedly {
  // Add the embedly to editor.
  add(url: string): void;
  // Hides the insert popup and shows inline menu for currently selected embedly.
  back(): void;
  // Gets the currently embedly instance.
  get(): void;
  // Inserts the embedly into editor from popup.
  insert(): void;
  // Removes the currently selected embedly instance.
  remove(): void;
  // Shows insert popup.
  showInsertPopup(): void;
}

export interface Emoticons {
  // Insert an emoticon at the cursor position.
  insert(emoticon: string, image?: string): object;
  // Insert an emoticon at the cursor position.
  setEmoticonCategory(categoryId: string): void;
}

export interface Events {
  // Check if blur events are active.
  blurActive(): boolean;
  // Binds the click event for given element.
  bindClick(element: Element, selector: string, handler: () => void): void;
  // Trigger events and chain the pass the returned value between the assigned events.
  chainTrigger(name: string, eventParams: object, force: boolean): object;
  // Disables the blur and focus events.
  disableBlur(): object;
  // Enables the blur and focus events.
  enableBlur(): object;
  // Focus into the editor.
  focus(): object;
  // Register an event.
  on(name: string, callback: (event: Event) => void | boolean, first: boolean): object;
  // Triggers an event.
  trigger(name: string, args: any[], force: boolean): object;
}

export interface File {
  // Insert the link to a file at the cursor position.
  insert(link: string, text: string, response: object): object;
  // Upload the passed file to the server.
  upload(files: any[]): object;
}

export interface FontFamily extends Apply<string> { }

export interface FontSize extends Apply<string> { }

export type FormatAttributes = { [key: string]: any; };
export interface Format {
  // Apply format for the selection or at the insertion point.
  apply(tagName: string, attributes: FormatAttributes): object;
  // Apply style for the selection or at the insertion point.
  applyStyle(cssProperty: string, cssAttributes: string | FormatAttributes): object;
  // Check format for the selection or at the insertion point.
  is(tagName: string, attributes: FormatAttributes): boolean;
  // Remove format for the selection or at the insertion point.
  remove(tagName: string, attributes: FormatAttributes): object;
  // Remove style for the selection or at the insertion point.
  removeStyle(cssPropertyName: string): object;
  // Toggle format for the selection or at the insertion point.
  toggle(tagName: string, attributes: FormatAttributes): object;
}

export interface Fullscreen {
  // Check the fullscreen state.
  isActive(): boolean;
  // Toggle fullscreen mode.
  toggle(): object;
}

export interface Forms {
  applyStyle(className: string, formStyles: object, formMultipleStyles: boolean): void;

}

export interface Helpers {
  isMobile(): boolean;
  isAndroid(): boolean;
  isBlackberry(): boolean;
  isIOS(): boolean;
  isMac(): boolean;
  isTouch(): boolean;
  isWindowsPhone(): boolean;
  scrollLeft(): number;
  scrollTop(): number;
  sanitizeURL(url: string): string;
}

export interface HTML {
  cleanEmptyTags(): object;
  get(keepMarkers?: boolean, keepClasses?: boolean): string;
  getSelected(): string;
  unwrap(): void;
  wrap(temp?: boolean, tables?: boolean, blockquote?: boolean): void;
  insert(html: string, clean?: boolean, doSplit?: boolean): object;
  set(html: string): object;
}

export type DisplayType = 'block' | 'inline';

export interface Image {
  align(alignType: AlignType): object;
  applyStyle(className: string): object;
  display(displayType: DisplayType): any ;
  get(): object;
  insert(link: string, sanitize: boolean, data: { [key: string]: any }, existingImage: any, response: object): object;
  remove(image: any): object;
  setAlt(alternateText: string): object;
  setSize(width: string, height: string): object;
  upload(images: any[]): object;
}

export interface ImageManager {
  hide(): object;
  show(): object;
}

export interface InlineClass extends Apply<string> { }

export interface InlineStyle extends Apply<string> { }

export interface Keys {
  ctrlKey(event: JQueryEventObject): boolean;
  isArrow(keyCode: number): boolean;
  isCharacter(keyCode: number): boolean;
}

export interface Language {
  translate(str: string): string;
}

export interface LineHeight extends Apply<number> { }

export interface Link {
  allSelected(): Element[];
  applyStyle(className: string): object;
  get(): Element;
  insert(href: string, text?: string, attributes?: { [key: string]: any }): object
  remove(): object;
}

export type ListType = 'OL' | 'UL';

export interface Lists {
  format(listType: ListType): object;
}

export interface Markdown{
  isEnabled():boolean;
  refresh(button: Element): void;
  toggle():void;
}
export interface Markers {
  insert(): object;
  insertAtPoint(event: JQueryEventObject): void;
  place(range: Range, marker?: boolean, id?: string): object;
  remove(): object;
  split(): object;
}

export interface Modals {
  areVisible(modalInstance: Element): boolean;
  create(id: string, headTemplate: string, bodyTemplate: string): Element;
  get(id: string): Element;
  isVisible(id: string): boolean;
  show(id: string): void;
  hide(id: string, restoreSelection: boolean): void;
}

export interface Node {
  blockParent(node: Element): Element;
  clearAttributes(node: Element): Element;
  contents(node: Element): any[];
  deepestParent(node: Element, until?: Element, simpleEnter?: boolean): Element;
  hasClass(element: Element, className: string): boolean;
  hasFocus(node: Element): boolean;
  isBlock(node: Element): boolean;
  isElement(node: Element): boolean;
  isDeletable(node: Element): boolean;
  isEditable(node: Element): boolean;
  isEmpty(node: Element, ignoreMarkers?: boolean): boolean;
  isFirstSibling(node: Element, ignoreMarkers?: boolean): boolean;
  isLastSibling(node: Element, ignoreMarkers?: boolean): boolean;
  isList(node: Element, ignoreMarkers?: boolean): boolean;
  isVoid(node: Element): boolean;
}

export interface ParagraphFormat extends Apply<string> { }

export interface ParagraphStyle extends Apply<string> { }

export interface Placeholder {
  hide(): void;
  isVisible(): void;
  refresh(): object;
  show(): void;
}

export interface Popups {
  // TODO: Documentation looks incorrect for this. Should be a boolean with arguments
  areVisible(): void;
  create(id: string, templateProperties: { [key: string]: any }): JQuery;
  get(id: string): JQuery;
  hide(id: string): boolean;
  hideAll(except?: string): object;
  isVisible(id: string): boolean;
  onHide(id: string, callback: () => void): object;
  onRefresh(id: string, callback: () => void): object;
  refresh(id: string): object;
  setContainer(id: string): void;
  show(id: string, leftOffset: number, topOffset: number, heigh: number): object;
}

export interface Position {
  getBoundingRect(): Element;
  refresh(): object;
}

export interface Quote extends Apply<string> {}

export interface Save {
  force(): object;
  save(): object;
  reset(): object;
}

export interface FroalaSelection {
  blocks(): Element[];
  clear(): object;
  element(): HTMLElement;
  endElement(): Element;
  get(): Selection;
  inEditor(): boolean;
  info(element: Element): object;
  isCollapsed(): boolean;
  isFull(): boolean;
  ranges(index?: number): Range | Range[];
  restore(): object;
  save(): object;
  setAfter(node: Element): object;
  setAtEnd(node: Element): object;
  setAtStart(node: Element): object;
  setBefore(node: Element): object;
  text(): string;
}

export interface Size {
  refresh(): object;
  syncIframe(): object;
}

export interface Snapshot {
  equal(snapshot1: Snapshot, snapshot2: Snapshot): boolean;
  get(): Snapshot;
  restore(snapshot: Snapshot): object;
}

export interface SpellChecker {
  toggle(): void;
}

export interface Table {
  insert(rows: number, columns: number): object;
}

export interface Toolbar {
  enable(): object;
  disable(): object;
  hide(): object;
  show(): object;
  showInline(element?: Element, force?: boolean): object;
}

export interface Tooltip {
  bind(element: Element, selector: string, displayAbove?: boolean): object;
  hide(): object;
  to(element: Element, displayAbove?: boolean): object;
}

export interface Track_Changes{
  toggleTracking():void;
  getPendingChanges():object[];
  showChanges ():void;
  acceptAllChanges ():void;
  rejectAllChanges ():void;
  acceptSingleChange ():void;
  rejectSingleChange ():void;

}
export interface Undo {
  canDo(): boolean;
  canRedo(): boolean;
  reset(): object;
  saveStep(): object;
}

export interface Video {
  align(alignType: AlignType): object;
  display(displayType: DisplayType): object;
  get(): JQuery;
  insert(embeddedCode: string): object;
  remove(): object;
  setSize(width: string, height: string): object;
}
