# �����ǰ����·��
Write-Host (Get-Location)

while ($true) {   
    # ������˿ں�
    $port = Read-Host "������˿ں�(1024-65535)"
    $port = $port.Trim() # ȥ��ǰ��ո�
    $port = $port -replace '\s+', '' # ȥ�����пո�
    $port = $port -replace '[^0-9]', '' # ȥ���������ַ�
    $port = $port -replace '^[0]+', '' # ȥ��ǰ����
    $port = [int]$port # ת��Ϊ����

    # �ж��Ƿ�Ϊ��
    if ($port -eq "") {
        $port = 8080 # Ĭ�϶˿�
        Write-Host "�˿ں�Ϊ�գ�ʹ��Ĭ�϶˿�8080"
        live-server --port=$port
    }
    # �ж��ǲ������ֶ˿�
    elseif ($port -ge 1024 -and $port -le 65535) {
        live-server --port=$port
    }
    else {
        Write-Host "�˿ںŷ����ֻ��ڷ�Χ1024-65535�ڣ����������룡"
        continue
    }
}