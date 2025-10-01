// import axios from "axios";
// import { NextResponse } from "next/server";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// const GROQ_API_KEY = process.env.GROQ_API_KEY;

// if (!process.env.GROQ_API_KEY) {
//     console.error("Missing GROQ_API_KEY in environment variables!");
// }

// export async function POST(req) {
//     try {
//         const body = await req.json();
//         const { title } = body;

//         // Validate title
//         if (!title) {
//             return NextResponse.json({ error: "Title is required" }, { status: 400 });
//         }

//         console.log(`Generating event for title: ${title}...`);

//         const aiResponse = await axios.post(
//             "https://api.groq.com/openai/v1/chat/completions",
//             {
//                 model: "llama3-8b-8192",
//                 messages: [
//                     {
//                         role: "user",
//                         content: `Generate a detailed event description for: ${title}. 
//                       The description should be at least *80 words* long.
//                       The price must be in *Indian Rupees (₹)*.
//                       Generate *strictly valid JSON* response. 
//                       Ensure no extra text or formatting, *only return JSON*.
//                       The JSON structure must be:
//                       ''' {
//                         "title": ${title},
//                         "description": "A detailed 80-word description",
//                         "price": "₹XXX",
//                         "category": "string",
//                         "hashtags": ["string"],
//                         "date": "YYYY-MM-DD",
//                         "time": "HH:MM AM/PM"
//                         "city": "string",
//                         "venue": "string"
//                          } '''
//                           add "}" at the end of the json dont forget to balnce the parantehsis
//                       The price must be in *Indian Rupees (₹)*.
//                       Do not include any explanations, pretext, markdown, or unnecessary formatting. Only return the JSON object.`,
//                     },
//                 ],
//                 max_tokens: 250,
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${GROQ_API_KEY}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         const content = aiResponse.data?.choices?.[0]?.message?.content?.trim();

//         if (!content) {
//             throw new Error("Invalid AI response format");
//         }

//         // Safe JSON Parsing with Error Handling
//         let eventData;
//         try {
//             eventData = JSON.parse(content);
//         } catch (parseError) {
//             console.error("JSON Parsing Error:", parseError.message, content);
//             throw new Error("Received invalid JSON from AI response");
//         }

//         console.log("Generated Event Data:", eventData);

//         return NextResponse.json({
//             success: true,
//             message: "Event generated successfully!",
//             data: eventData,
//         });
//     } catch (error) {
//         console.error(
//             "Error generating event:",
//             error.response?.data || error.message
//         );

//         return NextResponse.json(
//             {
//                 success: false,
//                 error: "Failed to generate event. Please try again later.",
//                 details: error.message,
//             },
//             { status: 500 }
//         );
//     }
// }
