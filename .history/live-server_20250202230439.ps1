D:
cd D:/VSLHR/学习笔记/项目/My/H5/Q爱记
write-host "已进入项目目录，请输入端口号（默认8080）："
# powershell用户输入内容
$content = Read-Host "请输入内容"
if (!$content) {
    $content = 8080
}
write-host "输入的内容是：$content"
live-server --port=$content