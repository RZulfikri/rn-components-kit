declare module '@rn-components-kit/icon' {

  import * as React from 'react';
  import {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to customize style
     */
    style?: ViewStyle;

    /**
     * Determines the icon's color
     * default: '#333'
     */
    color?: string;

    /**
     * Determines the icon's size
     * default: 15
     */
    size?: number;

    /**
     * Icon type, integrated in Ant-Design Preset(https://ant.design/components/icon/)
     */
    type: (
      'check-circle' |
      'ci' |
      'dollar' |
      'compass' |
      'close-circle' |
      'frown' |
      'info-circle' |
      'left-circle' |
      'down-circle' |
      'euro' |
      'copyright' |
      'minus-circle' |
      'meh' |
      'plus-circle' |
      'play-circle' |
      'question-circle' |
      'pound' |
      'right-circle' |
      'smile' |
      'trademark' |
      'time-circle' |
      'time-out' |
      'earth' |
      'yuan' |
      'up-circle' |
      'warning-circle' |
      'sync' |
      'transaction' |
      'undo' |
      'redo' |
      'reload' |
      'reload-time' |
      'message' |
      'dashboard' |
      'issues-close' |
      'poweroff' |
      'logout' |
      'pie-chart' |
      'setting' |
      'eye' |
      'location' |
      'edit-square' |
      'export' |
      'save' |
      'import' |
      'app-store' |
      'close-square' |
      'down-square' |
      'layout' |
      'left-square' |
      'play-square' |
      'control' |
      'code-library' |
      'detail' |
      'minus-square' |
      'plus-square' |
      'right-square' |
      'project' |
      'wallet' |
      'up-square' |
      'calculator' |
      'interation' |
      'check-square' |
      'border' |
      'border-outer' |
      'border-top' |
      'border-bottom' |
      'border-left' |
      'border-right' |
      'border-inner' |
      'border-verticle' |
      'border-horizontal' |
      'radius-bottomleft' |
      'radius-bottomright' |
      'radius-upleft' |
      'radius-upright' |
      'radius-setting' |
      'add-user' |
      'delete-team' |
      'delete-user' |
      'addteam' |
      'user' |
      'team' |
      'area-chart' |
      'line-chart' |
      'bar-chart' |
      'point-map' |
      'container' |
      'database' |
      'sever' |
      'mobile' |
      'tablet' |
      'red-envelope' |
      'book' |
      'file-done' |
      'reconciliation' |
      'file--exception' |
      'file-sync' |
      'file-search' |
      'solution' |
      'file-protect' |
      'file-add' |
      'file-excel' |
      'file-exclamation' |
      'file-pdf' |
      'file-image' |
      'file-markdown' |
      'file-unknown' |
      'file-ppt' |
      'file-word' |
      'file' |
      'file-zip' |
      'file-text' |
      'file-copy' |
      'snippets' |
      'audit' |
      'diff' |
      'batch-folding' |
      'security-scan' |
      'property-safety' |
      'safety-certificate' |
      'insurance' |
      'alert' |
      'delete' |
      'hourglass' |
      'bulb' |
      'experiment' |
      'bell' |
      'trophy' |
      'rest' |
      'usb' |
      'skin' |
      'home' |
      'bank' |
      'filter' |
      'funnel-plot' |
      'like' |
      'unlike' |
      'unlock' |
      'lock' |
      'customer-service' |
      'flag' |
      'money-collect' |
      'medicinebox' |
      'shop' |
      'rocket' |
      'shopping' |
      'folder' |
      'folder-open' |
      'folder-add' |
      'deployment-unit' |
      'account-book' |
      'contacts' |
      'carry-out' |
      'calendar-check' |
      'calendar' |
      'scan' |
      'select' |
      'box-plot' |
      'build' |
      'sliders' |
      'laptop' |
      'barcode' |
      'camera' |
      'cluster' |
      'gateway' |
      'car' |
      'printer' |
      'read' |
      'cloud-server' |
      'cloud-upload' |
      'cloud' |
      'cloud-download' |
      'cloud-sync' |
      'video' |
      'notification' |
      'sound' |
      'radar-chart' |
      'qrcode' |
      'fund' |
      'image' |
      'mail' |
      'table' |
      'id-card' |
      'credit-card' |
      'heart' |
      'block' |
      'error' |
      'star' |
      'gold' |
      'heat-map' |
      'wifi' |
      'attachment' |
      'edit' |
      'key' |
      'api' |
      'disconnect' |
      'highlight' |
      'monitor' |
      'link' |
      'man' |
      'percentage' |
      'pushpin' |
      'phone' |
      'shake' |
      'tag' |
      'wrench' |
      'tags' |
      'scissor' |
      'mr' |
      'share' |
      'branches' |
      'fork' |
      'shrink' |
      'arrawsalt' |
      'vertical-right' |
      'vertical-left' |
      'right' |
      'left' |
      'up' |
      'down' |
      'fullscreen' |
      'fullscreen-exit' |
      'doubleleft' |
      'double-right' |
      'arrowright' |
      'arrowup' |
      'arrowleft' |
      'arrowdown' |
      'upload' |
      'colum-height' |
      'vertical-align-botto' |
      'vertical-align-middl' |
      'totop' |
      'vertical-align-top' |
      'download' |
      'sort-descending' |
      'sort-ascending' |
      'fall' |
      'swap' |
      'stock' |
      'rise' |
      'indent' |
      'outdent' |
      'menu' |
      'unordered-list' |
      'ordered-list' |
      'align-right' |
      'align-center' |
      'align-left' |
      'pic-center' |
      'pic-right' |
      'pic-left' |
      'bold' |
      'font-colors' |
      'exclaimination' |
      'font-size' |
      'infomation' |
      'line-height' |
      'strikethrough' |
      'underline' |
      'number' |
      'italic' |
      'code' |
      'column-width' |
      'check' |
      'ellipsis' |
      'dash' |
      'close' |
      'enter' |
      'line' |
      'minus' |
      'question' |
      'rollback' |
      'small-dash' |
      'pause' |
      'bg-colors' |
      'crown' |
      'drag' |
      'desktop' |
      'gift' |
      'stop' |
      'fire' |
      'thunderbolt' |
      'check-circle-fill' |
      'left-circle-fill' |
      'down-circle-fill' |
      'minus-circle-fill' |
      'close-circle-fill' |
      'info-circle-fill' |
      'up-circle-fill' |
      'right-circle-fill' |
      'plus-circle-fill' |
      'question-circle-fill' |
      'euro-circle-fill' |
      'frown-fill' |
      'copyright-circle-fil' |
      'ci-circle-fill' |
      'compass-fill' |
      'dollar-circle-fill' |
      'poweroff-circle-fill' |
      'meh-fill' |
      'play-circle-fill' |
      'pound-circle-fill' |
      'smile-fill' |
      'stop-fill' |
      'warning-circle-fill' |
      'time-circle-fill' |
      'trademark-circle-fil' |
      'yuan-circle-fill' |
      'heart-fill' |
      'pie-chart-circle-fil' |
      'dashboard-fill' |
      'message-fill' |
      'check-square-fill' |
      'down-square-fill' |
      'minus-square-fill' |
      'close-square-fill' |
      'code-library-fill' |
      'left-square-fill' |
      'play-square-fill' |
      'up-square-fill' |
      'right-square-fill' |
      'plus-square-fill' |
      'account-book-fill' |
      'carry-out-fill' |
      'calendar-fill' |
      'calculator-fill' |
      'interation-fill' |
      'project-fill' |
      'detail-fill' |
      'save-fill' |
      'wallet-fill' |
      'control-fill' |
      'layout-fill' |
      'app-store-fill' |
      'mobile-fill' |
      'tablet-fill' |
      'book-fill' |
      'red-envelope-fill' |
      'safety-certificate-fill' |
      'property-safety-fill' |
      'insurance-fill' |
      'security-scan-fill' |
      'file-exclamation-fil' |
      'file-add-fill' |
      'file-fill' |
      'file-excel-fill' |
      'file-markdown-fill' |
      'file-text-fill' |
      'file-ppt-fill' |
      'file-unknown-fill' |
      'file-word-fill' |
      'file-zip-fill' |
      'file-pdf-fill' |
      'file-image-fill' |
      'diff-fill' |
      'file-copy-fill' |
      'snippets-fill' |
      'batch-folding-fill' |
      'reconciliation-fill' |
      'folder-add-fill' |
      'folder-fill' |
      'folder-open-fill' |
      'database-fill' |
      'container-fill' |
      'sever-fill' |
      'calendar-check-fill' |
      'image-fill' |
      'id-card-fill' |
      'credit-card-fill' |
      'fund-fill' |
      'read-fill' |
      'contacts-fill' |
      'delete-fill' |
      'notification-fill' |
      'flag-fill' |
      'money-collect-fill' |
      'medicine-box-fill' |
      'rest-fill' |
      'shopping-fill' |
      'skin-fill' |
      'video-fill' |
      'sound-fill' |
      'bulb-fill' |
      'bell-fill' |
      'filter-fill' |
      'fire-fill' |
      'funnel-plot-fill' |
      'gift-fill' |
      'hourglass-fill' |
      'home-fill' |
      'trophy-fill' |
      'location-fill' |
      'cloud-fill' |
      'customer-service-fill' |
      'experiment-fill' |
      'eye-fill' |
      'like-fill' |
      'lock-fill' |
      'unlike-fill' |
      'star-fill' |
      'unlock-fill' |
      'alert-fill' |
      'api-fill' |
      'highlight-fill' |
      'phone-fill' |
      'edit-fill' |
      'pushpin-fill' |
      'rocket-fill' |
      'thunderbolt-fill' |
      'tag-fill' |
      'wrench-fill' |
      'tags-fill' |
      'bank-fill' |
      'camera-fill' |
      'error-fill' |
      'crown-fill' |
      'mail-fill' |
      'car-fill' |
      'printer-fill' |
      'shop-fill' |
      'setting-fill' |
      'usb-fill' |
      'golden-fill' |
      'build-fill' |
      'box-plot-fill' |
      'sliders-fill' |
      'alibaba' |
      'alibabacloud' |
      'ant-design' |
      'ant-cloud' |
      'behance' |
      'google-plus' |
      'medium' |
      'google' |
      'ie' |
      'amazon' |
      'slack' |
      'alipay' |
      'taobao' |
      'zhihu' |
      'html5' |
      'linkedin' |
      'yahoo' |
      'facebook' |
      'skype' |
      'codesandbox' |
      'chrome' |
      'codepen' |
      'aliwangwang' |
      'apple' |
      'android' |
      'sketch' |
      'gitlab' |
      'dribbble' |
      'instagram' |
      'reddit' |
      'windows' |
      'yuque' |
      'youtube' |
      'gitlab-fill' |
      'dropbox' |
      'dingtalk' |
      'android-fill' |
      'apple-fill' |
      'html5-fill' |
      'windows-fill' |
      'qq' |
      'twitter' |
      'skype-fill' |
      'weibo' |
      'yuque-fill' |
      'youtube-fill' |
      'yahoo-fill' |
      'wechat-fill' |
      'chrome-fill' |
      'alipay-circle-fill' |
      'aliwangwang-fill' |
      'behance-circle-fill' |
      'amazon-circle-fill' |
      'codepen-circle-fill' |
      'codesandbox-circle-fill' |
      'dropbox-circle-fill' |
      'github-fill' |
      'dribbble-circle-fill' |
      'google-plus-circle-fill' |
      'medium-circle-fill' |
      'qq-circle-fill' |
      'ie-circle-fill' |
      'google-circle-fill' |
      'dingtalk-circle-fill' |
      'sketch-circle-fill' |
      'slack-circle-fill' |
      'twitter-circle-fill' |
      'taobao-circle-fill' |
      'weibo-circle-fill' |
      'zhihu-circle-fill' |
      'reddit-circle-fill' |
      'alipay-square-fill' |
      'dingtalk-square-fill' |
      'codesandbox-square-fill' |
      'behance-square-fill' |
      'amazon-square-fill' |
      'codepen-square-fill' |
      'dribbble-square-fill' |
      'dropbox-square-fill' |
      'facebook-fill' |
      'google-plus-square-fill' |
      'google-square-fill' |
      'instagram-fill' |
      'ie-square-fill' |
      'medium-square-fill' |
      'linkedin-fill' |
      'qq-square-fill' |
      'reddit-square-fill' |
      'twitter-square-fill' |
      'sketch-square-fill' |
      'slack-square-fill' |
      'taobao-square-fill' |
      'weibo-square-fill' |
      'zhihu-square-fill' |
      'zoom-out' |
      'apartment' |
      'audio' |
      'audio-fill' |
      'robot' |
      'zoom-in' |
      'robot-fill' |
      'bug-fill' |
      'bug' |
      'audio-static' |
      'comment' |
      'signal-fill' |
      'verified' |
      'shortcut-fill' |
      'videocamera-add' |
      'switch-user' |
      'whatsapp' |
      'appstore-add' |
      'caret-down' |
      'backward' |
      'caret-up' |
      'caret-right' |
      'caret-left' |
      'fast-backward' |
      'forward' |
      'fast-forward' |
      'search' |
      'retweet' |
      'login' |
      'step-backward' |
      'step-forward' |
      'swap-right' |
      'swap-left' |
      'woman' |
      'plus' |
      'eye-close-fill' |
      'eye-close' |
      'clear' |
      'collapse' |
      'expand' |
      'delete-column' |
      'merge-cells' |
      'subnode' |
      'rotate-left' |
      'rotate-right' |
      'insert-row-below' |
      'insert-row-above' |
      'solit-cells' |
      'format-painter' |
      'insert-row-right' |
      'format-painter-fill' |
      'insert-row-left' |
      'translate' |
      'delete-row' |
      'sister-node'
    );
  }

  export const Icon: React.SFC<Props>;
}