// use server'
'use server';
/**
 * @fileOverview Recommends language courses based on user goals, proficiency, and availability.
 *
 * - recommendCourses - A function that recommends courses.
 * - CourseRecommenderInput - The input type for the recommendCourses function.
 * - CourseRecommenderOutput - The return type for the recommendCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseRecommenderInputSchema = z.object({
  goals: z
    .string()
    .describe('The prospective student\'s goals for learning a language.'),
  proficiencyLevel: z
    .string()
    .describe(
      'The prospective student\'s current proficiency level in the target language (e.g., beginner, intermediate, advanced).'
    ),
  availability: z
    .string()
    .describe(
      'The prospective student\'s available time for language studies (e.g., evenings, weekends, full-time).'
    ),
});

export type CourseRecommenderInput = z.infer<typeof CourseRecommenderInputSchema>;

const CourseRecommenderOutputSchema = z.object({
  recommendedCourses: z
    .string()
    .describe(
      'A list of recommended language courses with brief descriptions, levels, and schedules, tailored to the student\'s goals, proficiency, and availability.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the courses were recommended, based on the student\'s input.'
    ),
});

export type CourseRecommenderOutput = z.infer<typeof CourseRecommenderOutputSchema>;

export async function recommendCourses(
  input: CourseRecommenderInput
): Promise<CourseRecommenderOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseRecommenderPrompt',
  input: {schema: CourseRecommenderInputSchema},
  output: {schema: CourseRecommenderOutputSchema},
  prompt: `You are an AI assistant designed to recommend the best language courses to prospective students, given their goals, current proficiency level, and availability. Provide a brief explanation of why you recommended each course.

Student Goals: {{{goals}}}
Proficiency Level: {{{proficiencyLevel}}}
Availability: {{{availability}}}

Based on this information, which courses would you recommend?`,
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: CourseRecommenderInputSchema,
    outputSchema: CourseRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);