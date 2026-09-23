Add-Type -AssemblyName System.Drawing

$rawPath = "d:\PORTFOLIO\WhatsApp Image 2026-09-04 at 2.23.09 PM.jpeg"
$rawImg = [System.Drawing.Image]::FromFile($rawPath)

Write-Host "Raw image loaded: $($rawImg.Width) x $($rawImg.Height)"

# 1. Main Avatar Crop (1000x1000 square with headroom & shoulders)
$avatarBmp = New-Object System.Drawing.Bitmap 1000, 1000
$gAvatar = [System.Drawing.Graphics]::FromImage($avatarBmp)
$gAvatar.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gAvatar.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gAvatar.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcCropRect = New-Object System.Drawing.Rectangle 43, 40, 1000, 1000
$destRect = New-Object System.Drawing.Rectangle 0, 0, 1000, 1000
$gAvatar.DrawImage($rawImg, $destRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gAvatar.Dispose()

$avatarBmp.Save("d:\PORTFOLIO\src\assets\images\avatar_hemant.png", [System.Drawing.Imaging.ImageFormat]::Png)
$avatarBmp.Save("d:\PORTFOLIO\src\assets\images\avatar_hemant.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Saved avatar_hemant.png and avatar_hemant.jpg (1000x1000)"

# 2. Close-up Headshot for Icons (820x820 -> high res icon base)
$closeCropRect = New-Object System.Drawing.Rectangle 133, 50, 820, 820
$baseIconBmp = New-Object System.Drawing.Bitmap 512, 512
$gBaseIcon = [System.Drawing.Graphics]::FromImage($baseIconBmp)
$gBaseIcon.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gBaseIcon.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gBaseIcon.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Circular clip with anti-aliasing
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(8, 8, 496, 496)
$gBaseIcon.SetClip($path)
$gBaseIcon.DrawImage($rawImg, (New-Object System.Drawing.Rectangle 8, 8, 496, 496), $closeCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gBaseIcon.ResetClip()

# Draw subtle gradient ring around the circle
$pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 102, 126, 234)), 12
$gBaseIcon.DrawEllipse($pen, 10, 10, 492, 492)
$pen.Dispose()
$path.Dispose()
$gBaseIcon.Dispose()

# Helper to generate scaled icon
function Save-Icon($size, $destPath) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($baseIconBmp, 0, 0, $size, $size)
    $g.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$iconsDir = "d:\PORTFOLIO\public\icons"

# Android Icons
Save-Icon 36 "$iconsDir\android-icon-36x36.png"
Save-Icon 48 "$iconsDir\android-icon-48x48.png"
Save-Icon 72 "$iconsDir\android-icon-72x72.png"
Save-Icon 96 "$iconsDir\android-icon-96x96.png"
Save-Icon 144 "$iconsDir\android-icon-144x144.png"
Save-Icon 192 "$iconsDir\android-icon-192x192.png"

# Apple Icons
Save-Icon 57 "$iconsDir\apple-icon-57x57.png"
Save-Icon 60 "$iconsDir\apple-icon-60x60.png"
Save-Icon 72 "$iconsDir\apple-icon-72x72.png"
Save-Icon 76 "$iconsDir\apple-icon-76x76.png"
Save-Icon 114 "$iconsDir\apple-icon-114x114.png"
Save-Icon 120 "$iconsDir\apple-icon-120x120.png"
Save-Icon 144 "$iconsDir\apple-icon-144x144.png"
Save-Icon 152 "$iconsDir\apple-icon-152x152.png"
Save-Icon 180 "$iconsDir\apple-icon-180x180.png"
Save-Icon 192 "$iconsDir\apple-icon.png"
Save-Icon 192 "$iconsDir\apple-icon-precomposed.png"

# Favicons
Save-Icon 16 "$iconsDir\favicon-16x16.png"
Save-Icon 32 "$iconsDir\favicon-32x32.png"
Save-Icon 96 "$iconsDir\favicon-96x96.png"

# MS Icons
Save-Icon 70 "$iconsDir\ms-icon-70x70.png"
Save-Icon 144 "$iconsDir\ms-icon-144x144.png"
Save-Icon 150 "$iconsDir\ms-icon-150x150.png"
Save-Icon 310 "$iconsDir\ms-icon-310x310.png"

# Logo 192 and 512
Save-Icon 192 "$iconsDir\logo192.png"
Save-Icon 512 "$iconsDir\logo512.png"

# Favicon .ico
$icoBmp = New-Object System.Drawing.Bitmap 32, 32
$gIco = [System.Drawing.Graphics]::FromImage($icoBmp)
$gIco.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gIco.DrawImage($baseIconBmp, 0, 0, 32, 32)
$gIco.Dispose()
$hIcon = $icoBmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$fs1 = New-Object System.IO.FileStream "$iconsDir\favicon.ico", ([System.IO.FileMode]::Create)
$icon.Save($fs1)
$fs1.Close()
$fs2 = New-Object System.IO.FileStream "$iconsDir\favicon1.ico", ([System.IO.FileMode]::Create)
$icon.Save($fs2)
$fs2.Close()
$icoBmp.Dispose()

Write-Host "All icons generated successfully!"

# 3. Generate high-end OpenGraph Card (desc.png: 1280x640)
$ogBmp = New-Object System.Drawing.Bitmap 1280, 640
$gOg = [System.Drawing.Graphics]::FromImage($ogBmp)
$gOg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gOg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gOg.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background: Dark navy gradient
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, 0), (New-Object System.Drawing.Point 1280, 640), ([System.Drawing.Color]::FromArgb(255, 11, 15, 25)), ([System.Drawing.Color]::FromArgb(255, 24, 32, 54))
$gOg.FillRectangle($bgBrush, 0, 0, 1280, 640)
$bgBrush.Dispose()

# Ambient glow circle behind avatar
$glowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(40, 102, 126, 234))
$gOg.FillEllipse($glowBrush, 60, 60, 480, 480)
$glowBrush.Dispose()

# Draw Hemant's Avatar inside a circular frame
$avatarSize = 380
$avatarX = 110
$avatarY = 130
$clipPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$clipPath.AddEllipse($avatarX, $avatarY, $avatarSize, $avatarSize)
$gOg.SetClip($clipPath)
$gOg.DrawImage($avatarBmp, $avatarX, $avatarY, $avatarSize, $avatarSize)
$gOg.ResetClip()

# Ring border with gradient
$ringPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 118, 75, 162)), 8
$gOg.DrawEllipse($ringPen, $avatarX, $avatarY, $avatarSize, $avatarSize)
$ringPen.Dispose()

# Typography
$nameFont = New-Object System.Drawing.Font ("Segoe UI", [single]44, [System.Drawing.FontStyle]::Bold)
$titleFont = New-Object System.Drawing.Font ("Segoe UI", [single]24, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font ("Segoe UI", [single]16, [System.Drawing.FontStyle]::Regular)
$tagFont = New-Object System.Drawing.Font ("Segoe UI", [single]14, [System.Drawing.FontStyle]::Bold)
$urlFont = New-Object System.Drawing.Font ("Segoe UI", [single]16, [System.Drawing.FontStyle]::Regular)

$textX = 540

# Accent badge
$badgeText = "SOFTWARE & WEB3 ENGINEER"
$badgeSizeF = $gOg.MeasureString($badgeText, $tagFont)
$badgeW = [int]$badgeSizeF.Width + 28
$badgeH = 32
$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(60, 102, 126, 234))
$gOg.FillRectangle($badgeBrush, $textX, 130, $badgeW, $badgeH)
$badgeBrush.Dispose()
$badgeBorder = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 102, 126, 234)), 1
$gOg.DrawRectangle($badgeBorder, $textX, 130, $badgeW, $badgeH)
$badgeBorder.Dispose()
$badgeTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 175, 195, 255))
$gOg.DrawString($badgeText, $tagFont, $badgeTextBrush, ($textX + 14), 137)
$badgeTextBrush.Dispose()

# Name
$nameBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$gOg.DrawString("Hemant Singh Rathore", $nameFont, $nameBrush, $textX, 170)
$nameBrush.Dispose()

# Title
$titleBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point $textX, 245), (New-Object System.Drawing.Point ($textX + 600), 245), ([System.Drawing.Color]::FromArgb(255, 160, 180, 255)), ([System.Drawing.Color]::FromArgb(255, 240, 147, 251))
$gOg.DrawString("Blockchain Developer & Full-Stack Engineer", $titleFont, $titleBrush, $textX, 245)
$titleBrush.Dispose()

# Description / Summary (Clean 2-line layout)
$descBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 190, 200, 220))
$gOg.DrawString("Specializing in Smart Contracts, Solidity & Ethereum Development.", $subFont, $descBrush, $textX, 298)
$gOg.DrawString("Building scalable decentralized protocols and web applications.", $subFont, $descBrush, $textX, 326)
$descBrush.Dispose()

# Tech stack tags
$tags = @("Solidity", "Ethereum", "Web3.js", "React", "Node.js", "Python")
$tagX = $textX
$tagY = 385
$tagBgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
$tagBorderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(80, 255, 255, 255)), 1
$tagTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 225, 235, 250))

foreach ($tag in $tags) {
    $sizeF = $gOg.MeasureString($tag, $tagFont)
    $tagWidth = [int]$sizeF.Width + 24
    $tagHeight = 36
    $gOg.FillRectangle($tagBgBrush, $tagX, $tagY, $tagWidth, $tagHeight)
    $gOg.DrawRectangle($tagBorderPen, $tagX, $tagY, $tagWidth, $tagHeight)
    $gOg.DrawString($tag, $tagFont, $tagTextBrush, ($tagX + 12), ($tagY + 6))
    $tagX += $tagWidth + 14
}

$tagBgBrush.Dispose()
$tagBorderPen.Dispose()
$tagTextBrush.Dispose()

# Website link
$urlBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 140, 175, 245))
$dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 46, 213, 115))
$gOg.FillEllipse($dotBrush, $textX, 462, 10, 10)
$gOg.DrawString("https://hemant-portfolio-flame.vercel.app", $urlFont, $urlBrush, ($textX + 20), 456)
$urlBrush.Dispose()
$dotBrush.Dispose()

$gOg.Dispose()
$ogBmp.Save("$iconsDir\desc.png", [System.Drawing.Imaging.ImageFormat]::Png)
$ogBmp.Dispose()
Write-Host "Generated new OpenGraph preview banner at $iconsDir\desc.png"

# Clean up resources
$avatarBmp.Dispose()
$baseIconBmp.Dispose()
$rawImg.Dispose()

Write-Host "All image generation completed successfully!"
